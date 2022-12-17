import DomNode from './node';

/* -------------------------------------------------------------------------- */
/*                                Theme Control                               */
/* -------------------------------------------------------------------------- */
/* eslint-disable no-param-reassign */
/* eslint-disable */
const { config } = window.config;

const initialDomSetup = element => {
  const { getData, getItemFromStore, setItemToStore } = window.phoenix.utils;
  if (!element) return;
  // const dataUrlDom = element.querySelector('[data-theme-control = "navbarPosition"]');
  // const hasDataUrl = dataUrlDom ? getData(dataUrlDom, 'page-url') : null;

  element.querySelectorAll('[data-theme-control]').forEach(el => {
    const inputDataAttributeValue = getData(el, 'theme-control');
    const localStorageValue = getItemFromStore(inputDataAttributeValue);

    if (el.type === 'checkbox') {
      if (inputDataAttributeValue === 'phoenixTheme') {
        localStorageValue === 'dark' && el.setAttribute('checked', true);
      } else {
        localStorageValue && el.setAttribute('checked', true);
      }
    } else if (
      el.type === 'radio' &&
      inputDataAttributeValue === 'phoenixNavbarVerticalStyle'
    ) {
      localStorageValue === 'darker' &&
        el.value === 'darker' &&
        el.setAttribute('checked', true);
      localStorageValue === 'default' &&
        el.value === 'default' &&
        el.setAttribute('checked', true);

      // const navbarPositon = localStorage.getItem('phoenixNavbarPosition')
      // navbarPositon === 'horizontal' && el.setAttribute('disabled', true);
      
    } else if (
      el.type === 'radio' &&
      inputDataAttributeValue === 'phoenixNavbarTopShape'
    ) {
      localStorageValue === 'slim' &&
        el.value === 'slim' &&
        el.setAttribute('checked', true);
      localStorageValue === 'default' &&
        el.value === 'default' &&
        el.setAttribute('checked', true);
    } else if (
      el.type === 'radio' &&
      inputDataAttributeValue === 'phoenixNavbarTopStyle'
    ) {
      localStorageValue === 'darker' &&
        el.value === 'darker' &&
        el.setAttribute('checked', true);
      localStorageValue === 'default' &&
        el.value === 'default' &&
        el.setAttribute('checked', true);
    } else {
      const isChecked = localStorageValue === el.value;
      isChecked && el.setAttribute('checked', true);
    }
  });
};

const changeTheme = element => {
  const { getData, getItemFromStore } = window.phoenix.utils;

  element
    .querySelectorAll('[data-theme-control = "phoenixTheme"]')
    .forEach(el => {
      const inputDataAttributeValue = getData(el, 'theme-control');
      const localStorageValue = getItemFromStore(inputDataAttributeValue);

      if (el.type === 'checkbox') {
        localStorageValue === 'dark'
          ? (el.checked = true)
          : (el.checked = false);
      } else {
        localStorageValue === el.value
          ? (el.checked = true)
          : (el.checked = false);
      }
    });
};

const themeControl = () => {
  const { setItemToStore, getData } = window.phoenix.utils;

  const themeController = new DomNode(document.body);

  const navbarVertical = document.querySelector('.navbar-vertical');
  const navbarTop = document.querySelector('.navbar-top');
  initialDomSetup(themeController.node);

  themeController.on('click', e => {
    const target = new DomNode(e.target);

    if (target.data('theme-control')) {
      const control = target.data('theme-control');

      let value = e.target[e.target.type === 'radio' ? 'value' : 'checked'];
      if (control === 'phoenixTheme') {
        typeof value === 'boolean' && (value = value ? 'dark' : 'light');
      }
      // if( nav)

      config.hasOwnProperty(control) && setItemToStore(control, value);
      window.history.replaceState(null, null, window.location.pathname);
      switch (control) {
        case 'phoenixTheme': {
          document.documentElement.classList[
            value === 'dark' ? 'add' : 'remove'
          ]('dark');
          const clickControl = new CustomEvent('clickControl', {
            detail: { control, value }
          });
          e.currentTarget.dispatchEvent(clickControl);
          changeTheme(themeController.node);
          break;
        }
        case 'phoenixNavbarVerticalStyle': {
          navbarVertical.classList.remove('navbar-darker');
          if (value !== 'default') {
            navbarVertical.classList.add(`navbar-${value}`);
          }
          break;
        }
        case 'phoenixNavbarTopStyle': {
          navbarTop.classList.remove('navbar-darker');
          if (value !== 'transparent') {
            navbarTop.classList.add(`navbar-${value}`);
          }
          break;
        }
        case 'phoenixNavbarTopShape':
          {
            const pageUrl = getData(target.node, 'page-url');

            if (pageUrl) {
              window.location.replace(pageUrl);
              // setItemToStore('phoenixNavbarTopShape', 'default');
            } else {
              window.location.reload();
            }
          }
          // case 'phoenixNavbarTopShape': {
          //   localStorage.setItem('phoenixNavbarPosition', 'vertical');
          //   window.location.reload();
          // }
          break;
        case 'phoenixNavbarPosition':
          {
            const pageUrl = getData(target.node, 'page-url');
            console.log({ pageUrl });
            if (pageUrl) {
              window.location.replace(pageUrl);
            } else {
              window.location.reload();
            }
          }
          // }
          break;

        case 'reset': {
          Object.keys(config).forEach(key => {
            localStorage.setItem(key, config[key]);
          });
          window.location.reload();
          break;
        }

        default: {
          window.location.reload();
        }
      }
    }
  });
};

export default themeControl;

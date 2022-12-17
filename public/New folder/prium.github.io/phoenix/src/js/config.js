/* eslint-disable no-extra-boolean-cast */
/* -------------------------------------------------------------------------- */
/*                              Config                                        */
/* -------------------------------------------------------------------------- */
const configQueryMap = {
  'navbar-vertical-collapsed': 'phoenixIsNavbarVerticalCollapsed',
  'color-scheme': 'phoenixTheme',
  'navigation-type': 'phoenixNavbarPosition',
  'vertical-navbar-appearance': 'phoenixNavbarVerticalStyle',
  'horizontal-navbar-shape': 'phoenixNavbarTopShape',
  'horizontal-navbar-appearance': 'phoenixNavbarTopStyle'
};

const CONFIG = {
  phoenixIsNavbarVerticalCollapsed: false,
  phoenixTheme: 'light',
  phoenixNavbarTopStyle: 'default',
  phoenixNavbarVerticalStyle: 'default',
  phoenixNavbarPosition: 'vertical',
  phoenixNavbarTopShape: 'default'
};

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log({ params });

if (Object.keys(params).length > 0) {
  Object.keys(CONFIG).forEach(key => {
    localStorage.setItem(key, CONFIG[key]);
  });
}

Object.keys(params).forEach(param => {
  console.log({ param });

  console.log(configQueryMap[param], params[param]);
  if (configQueryMap[param]) {
    localStorage.setItem(configQueryMap[param], params[param]);
  }
});

Object.keys(CONFIG).forEach(key => {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, CONFIG[key]);
  }
});

if (!!JSON.parse(localStorage.getItem('phoenixIsNavbarVerticalCollapsed'))) {
  document.documentElement.classList.add('navbar-vertical-collapsed');
}

if (localStorage.getItem('phoenixTheme') === 'dark') {
  document.documentElement.classList.add('dark');
}

if (localStorage.getItem('phoenixNavbarPosition') === 'horizontal') {
  document.documentElement.classList.add('navbar-horizontal');
}

export default {
  config: CONFIG
};

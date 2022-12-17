const { merge } = window._;

/* -------------------------------------------------------------------------- */
/*                                   Tinymce                                  */
/* -------------------------------------------------------------------------- */

const tinymceInit = () => {
  const { getColor, getData } = window.phoenix.utils;

  const tinymces = document.querySelectorAll('[data-tinymce]');

  if (window.tinymce) {
    tinymces.forEach(tinymceEl => {
      const userOptions = getData(tinymceEl, 'tinymce');
      const options = merge(
        {
          selector: '.tinymce',
          height: '50vh',
          skin: 'oxide',
          menubar: false,
          content_style: `
        .mce-content-body { 
          color: ${getColor('black')} 
        }
        .mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
          color: ${getColor('gray-400')};
          font-weight: 400;
          font-size: 12.8px;
        }
        `,
          mobile: {
            theme: 'mobile',
            toolbar: ['undo', 'bold']
          },
          statusbar: false,
          plugins: 'link,image,lists,table,media',
          theme_advanced_toolbar_align: 'center',
          toolbar: [
            { name: 'history', items: ['undo', 'redo'] },
            {
              name: 'formatting',
              items: ['bold', 'italic', 'underline', 'strikethrough']
            },
            {
              name: 'alignment',
              items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify']
            },
            { name: 'list', items: ['numlist', 'bullist'] },
            { name: 'link', items: ['link'] }
          ]
        },
        userOptions
      );
      window.tinymce.init(options);
    });

    const themeController = document.body;
    if (themeController) {
      themeController.addEventListener(
        'clickControl',
        ({ detail: { control } }) => {
          if (control === 'phoenixTheme') {
            tinymces.forEach(tinymceEl => {
              const instance = window.tinymce.get(tinymceEl.id);
              instance.dom.addStyle(
                `.mce-content-body{color: ${getColor('black')} !important;}`
              );
            });
          }
        }
      );
    }
  }
};

export default tinymceInit;

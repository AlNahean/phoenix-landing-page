/* eslint-disable no-new */
/*-----------------------------------------------
|                    Phoenix Offcanvas
-----------------------------------------------*/

const phoenixOffcanvasInit = () => {
  const { getData } = window.phoenix.utils;
  const toggleEl = document.querySelector("[data-phoenix-toggle='offcanvas']");
  const offcanvasBackdrop = document.querySelector('[data-phoenix-backdrop]');

  if (toggleEl) {
    const offcanvasTarget = getData(toggleEl, 'phoenix-target');
    const offcanvasTargetEl = document.querySelector(offcanvasTarget);
    const closeBtn = offcanvasTargetEl.querySelector(
      "[data-phoenix-dismiss='offcanvas']"
    );
    const showFilterCol = () => {
      offcanvasTargetEl.classList.add('show');
      document.body.style.overflow = 'hidden';
    };
    const hideFilterCol = () => {
      offcanvasTargetEl.classList.remove('show');
      document.body.style.removeProperty('overflow');
    };
    toggleEl.addEventListener('click', () => {
      showFilterCol();
    });
    closeBtn.addEventListener('click', () => {
      hideFilterCol();
    });
    if (offcanvasBackdrop) {
      offcanvasBackdrop.addEventListener('click', () => {
        hideFilterCol();
      });
    }
  }
};

export default phoenixOffcanvasInit;

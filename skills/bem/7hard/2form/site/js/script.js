const submitButtons = document.querySelectorAll('.checkout-form button');
const sections = document.querySelectorAll('.checkout-section');
const progressItems = document.querySelectorAll('.progress__item');

const tabsNav = document.querySelector('.tabs__navigation');

const tabsNavItems = document.querySelectorAll('.tabs__navigation-link');

const pages = document.querySelectorAll('.tabs__pages-item');

const tariffPlans = document.querySelectorAll('.tariff-plan');
const tariffPlanControls = document.querySelectorAll('[name="tariff-plan"]');

const paymentMethodControls = document.querySelectorAll('.payment-type input');
const paymentPanels = document.querySelectorAll('.payment-type');

const setActivePage = (anchor) => {
  if (!anchor) return;

  tabsNavItems.forEach((navItem) => {
    navItem.classList.toggle('tabs__navigation-link--active', anchor === navItem.getAttribute("href"));
  });

  pages.forEach((page) => {
    page.classList.toggle('tabs__pages-item--active', anchor === ('#' + page.id));
  });
}

const tabsNavClickHandler = (evt) => {
  const item = evt.target.closest('a');

  if (!item) {
    return;
  }

  item.preventDefault();

  const anchor = item.getAttribute("href");
  setActivePage(anchor);
}

const setActiveSection = (id) => {
  if (!id) return;

  sections.forEach((page) => {
    page.classList.toggle('checkout-section--active', id === page.id);
  });
}

const buttonClickHandler = (evt) => {
  evt.preventDefault();
  const target = evt.target.dataset.target;

  if (!target) {
    return;
  }

  setActiveSection(target);
}

const setActiveTariff = (value) => {
  tariffPlanControls.forEach((control) => {
    control.checked = control.value === value;
  });

  tariffPlans.forEach((tariff) => {
    tariff.classList.toggle('tariff-plan--active', tariff.id === value);
  });
}

const tariffPlanClickHandler = (evt) => {
  const section = evt.target.closest('section');
  if (!section) {
    return;
  }

  setActiveTariff(section.id);
}

const paymentMethodControlsChangeHandler = (evt) => {
  const parentPanel = evt.target.closest('.payment-type');

  paymentPanels.forEach((panel) => {
    panel.classList.remove('payment-type--active');
  });

  parentPanel.classList.add('payment-type--active');
}

const init = () => {
  submitButtons.forEach((button) => {
    button.addEventListener('click', buttonClickHandler);
  });

  tabsNav && tabsNav.addEventListener('click', tabsNavClickHandler);

  tariffPlans.forEach((tariff) => {
    tariff.addEventListener('click', tariffPlanClickHandler);
  });

  paymentMethodControls.forEach((method) => {
    method.addEventListener('change', paymentMethodControlsChangeHandler);
  });
}

init();

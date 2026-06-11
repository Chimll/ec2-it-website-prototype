// Minimal progressive enhancement for the EC2 IT static prototype.
document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.nav-toggle');
  var navigation = document.getElementById('primary-navigation');

  if (navToggle && navigation) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navigation.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('nav-open', !isOpen);
    });

    navigation.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        navToggle.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
        document.body.classList.remove('nav-open');
        closeMegaMenus();
      }
    });
  }

  var megaMenus = Array.prototype.slice.call(document.querySelectorAll('.nav-mega'));

  function closeMegaMenus(exceptMenu) {
    megaMenus.forEach(function (menu) {
      if (menu !== exceptMenu) {
        menu.removeAttribute('open');
      }
    });
  }

  if (megaMenus.length) {
    megaMenus.forEach(function (menu) {
      menu.addEventListener('toggle', function () {
        if (menu.open) {
          closeMegaMenus(menu);
        }
      });
    });

    document.addEventListener('click', function (event) {
      if (!event.target.closest('.primary-nav')) {
        closeMegaMenus();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMegaMenus();
      }
    });
  }

  var contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var status = contactForm.querySelector('.form-status');

      if (status) {
        status.textContent = 'Prototype only: this form is ready to connect to a Joomla form component.';
      }
    });
  }
});

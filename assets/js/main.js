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

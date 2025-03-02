(function (Drupal) {
  'use strict';
  Drupal.behaviors.topic_page_customizations = {
    attach: function () {
      let btn = document.querySelector('button.gsa-menu-btn'),
          items = document.querySelectorAll('.overlay-trigger'),
          scrollBody = document.querySelector('body'),
          items_array = [...items];
      btn.onclick = () => {
        items_array.forEach(item => {
          item.classList.add('is-visible');
          scrollBody.classList.add("overflow-hidden");
        });
      };
      document.querySelector('.tbm-button').onclick = () => {
        items_array.forEach(item => {
          item.classList.remove('is-visible');
          scrollBody.classList.remove("overflow-hidden");
        });
      };
      document.addEventListener('click', event => {
        if (event.target.closest('.usa-overlay')) {
          scrollBody.classList.remove("overflow-hidden");
        }
      });
    },
  };
}(Drupal));

/*
 * Expand /  Collapse buttons for accordions within body
 *
 * @[data-allow-multiple][data-expand-buttons]
 * Allow Multiple Open is required for this to display
 */
(function (Drupal, drupalSettings, once) {
  Drupal.behaviors.accordion_expand_all = {
    attach: function (context, settings) {
      once('accordionExpandAll', '.usa-accordion[data-allow-multiple][data-expand-buttons]', context).forEach(element => {

        element.insertAdjacentHTML('afterbegin', '<a title="expand accordions" href="javascript:;" data-expand-all>Expand all</a> ' +
          '| <a title="collapse accordions" href="javascript:;" data-collapse-all>Collapse all</a>');

        let expandAllLink = element.querySelector('[data-expand-all]'),
          collapseAllLink = element.querySelector('[data-collapse-all]'),
          items = element.querySelectorAll('.usa-accordion__content, .usa-accordion__button'),
          headers = element.querySelectorAll('.usa-accordion__button'),
          bodyLink = document.querySelector('[data-expand-all]');

        [].forEach.call(items, function (item) {
          expandAllLink.addEventListener('click', () => {
            expandAll(item);
          });
          collapseAllLink.addEventListener('click', () => {
            collapseAll(item);
          });
          bodyLink.addEventListener('click', () => {
            expandAll(item);
          });
        });

        const expandAll = (arg) => {
          arg.removeAttribute('hidden');//.usa-accordion__content
          expandAllLink.style.fontWeight = 'bold';
          collapseAllLink.style.fontWeight = 'normal';
          arg.setAttribute('aria-expanded', true);//.usa-accordion__button
        };
        const collapseAll = (arg) => {
          arg.setAttribute('hidden', true);//.usa-accordion__content
          expandAllLink.style.fontWeight = 'normal';
          collapseAllLink.style.fontWeight = 'bold';
          arg.setAttribute('aria-expanded', false);//.usa-accordion__button
        };
      });
    },
  };
})(Drupal, drupalSettings, once);

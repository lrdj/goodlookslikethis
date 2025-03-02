(function (Drupal, once) {
  /**
   * Behavior for the clear button on the glossary search input.
   */
  Drupal.behaviors.glossaryClearButton = {
    attach: function (context, settings) {
      once('glossary-clear', '#glossary-clear-button', context).forEach((clearButton) => {
        clearButton.addEventListener('click', function () {
          const searchInput = document.getElementById('glossary-search');
          if (searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input')); // Trigger filtering reset
          }
        });
      });
    },
  };

  /**
   * Behavior for loading the glossary via AJAX.
   */
  Drupal.behaviors.glossaryLoader = {
    attach: function (context, settings) {
      once('glossary-loader', 'body', context).forEach(() => {
        fetch('/glossary/ajax', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response) => {
            if (!response.ok) throw new Error(`Network error: ${response.statusText} (${response.status})`);
            return response.json();
          })
          .then((data) => {
            if (data.html) {
              const wrapper = document.createElement('div');
              wrapper.innerHTML = data.html;
              const glossaryElement = wrapper.firstElementChild;
              document.body.appendChild(glossaryElement);
              Drupal.attachBehaviors(glossaryElement, settings);
            }
          });
      });
    },
  };

  /**
   * Behavior for filtering terms based on the input value.
   */
  Drupal.behaviors.glossaryFilter = {
    attach: function (context, settings) {
      once('glossary-filter', '#glossary-search', context).forEach((searchInput) => {
        searchInput.addEventListener('input', function () {
          const searchValue = searchInput.value.trim().toLowerCase();
          const terms = document.querySelectorAll('#glossary .glossary_term');

          terms.forEach((term) => {
            const termText = term.textContent.trim().toLowerCase();
            const definition = document.getElementById(term.getAttribute('aria-controls'));
            const listItem = term.closest('li');

            if (searchValue && !termText.includes(searchValue)) {
              if (listItem) listItem.style.display = 'none';
            } else {
              if (listItem) listItem.style.display = 'list-item';
            }
          });

          if (!searchValue) {
            document.querySelectorAll('#glossary li').forEach((listItem) => {
              listItem.style.display = 'list-item';
            });
          }
        });
      });
    },
  };

  /**
   * Behavior for opening the glossary sidebar.
   */
  Drupal.behaviors.glossaryOpenButton = {
    attach: function (context, settings) {
      once('glossary-open-button', '.glossary_open', context).forEach((openButton) => {
        openButton.addEventListener('click', function () {
          const glossary = document.getElementById('glossary');
          const glossarySearch = document.getElementById('glossary-search');
          if (glossary) {
            glossary.style.display = 'block';
            if (glossarySearch) glossarySearch.focus();
          }
        });
      });
    },
  };

  /**
   * Behavior for opening and focusing on a specific term.
   */
  Drupal.behaviors.glossaryOpenTerm = {
    attach: function (context, settings) {
      once('glossary-open-term', '*[data-term]', context).forEach((termElement) => {
        termElement.addEventListener('click', function () {
          const glossarySearch = document.getElementById('glossary-search');
          const glossary = document.getElementById('glossary');

          if (!glossary || !glossarySearch) return;

          glossary.style.display = 'block';
          glossarySearch.value = this.getAttribute('data-term');
          glossarySearch.dispatchEvent(new Event('input')); // Trigger filtering.

          glossarySearch.focus();

          const terms = document.querySelectorAll('#glossary .glossary_term');
          terms.forEach((term) => {
            const definition = document.getElementById(term.getAttribute('aria-controls'));
            const listItem = term.closest('li');

            if (term.textContent.trim().toLowerCase() === glossarySearch.value.trim().toLowerCase()) {
              if (listItem) listItem.style.display = 'list-item';
              term.setAttribute('aria-expanded', 'true');
              if (definition) {
                definition.hidden = false;
                definition.style.display = 'block';
                definition.querySelectorAll('ul > li').forEach((nestedLi) => {
                  nestedLi.style.display = ''; // Reset to default.
                });
              }
            } else {
              if (listItem) listItem.style.display = 'none';
            }
          });
        });
      });
    },
  };

  /**
   * Behavior for accordion-style toggling of glossary terms.
   */
  Drupal.behaviors.glossaryAccordion = {
    attach: function (context) {
      once('glossary-accordion', '#glossary .glossary_term', context).forEach((term) => {
        term.addEventListener('click', (e) => {
          e.preventDefault();

          const definition = document.getElementById(term.getAttribute('aria-controls'));
          const expanded = term.getAttribute('aria-expanded') === 'true';

          term.setAttribute('aria-expanded', expanded ? 'false' : 'true');
          if (definition) {
            definition.hidden = expanded;
            definition.style.display = expanded ? 'none' : 'block';

            definition.querySelectorAll('ul > li').forEach((nestedLi) => {
              nestedLi.style.display = ''; // Reset to default.
            });
          }
        });
      });
    },
  };


  /**
   * Behavior for handling the close button on the glossary sidebar.
   */
  Drupal.behaviors.glossaryCloseButton = {
    attach: function (context, settings) {
      once('glossary-close-button', '.glossary_close', context).forEach((closeButton) => {
        closeButton.addEventListener('click', function () {
          const glossary = document.getElementById('glossary');
          if (glossary) {
            glossary.style.display = 'none';
          }
        });
      });

      // Escape key handler
      once('glossary-escape-key', 'body', context).forEach((body) => {
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            const glossary = document.getElementById('glossary');
            if (glossary && glossary.style.display !== 'none') {
              glossary.style.display = 'none';
            }
          }
        });
      });
    },
  };
})(Drupal, once);

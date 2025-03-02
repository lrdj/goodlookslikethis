(function (Drupal, drupalSettings, once) {
  Drupal.behaviors.photo_album_customizations_behavior = {
    attach: function (context, settings) {
      const resizeContainer = (carousel) => {
        const element = carousel.container.firstElementChild;
        if (!element) return;

        const albumWrapper = element.closest('.album_wrapper');
        const wrapperWidth = albumWrapper ? albumWrapper.clientWidth - 32 : 640; // account for padding

        const currentSlide = carousel.pages[carousel.page].slides[0];
        const slide_wrapper = currentSlide.el;
        const slide_img = currentSlide.el.querySelector('img');

        const caption = currentSlide.el.querySelector('.file_caption');
        const viewportWidth = window.innerWidth;
        // Reset image height first to get proper dimensions
        slide_img.style.height = 'auto';

        // Add extra height
        if (caption) {
          // Calculate height based on wrapper width and image ratio
          const imgHeight = slide_img.offsetHeight;
          const captionHeight = caption.offsetHeight;

          const totalSlideHeight = imgHeight + captionHeight;
          slide_wrapper.style.height = `${totalSlideHeight + 32}px`;

          carousel.container.style.height = `${totalSlideHeight + 42}px`;

          const minWidth = Math.min(640, wrapperWidth);
          carousel.container.style.width = `${Math.max(minWidth, slide_img.offsetWidth)}px`;

        }

        if (viewportWidth <= 640) {
          slide_img.style.height = `auto`;
        }
      };
      const handleCaption = (carousel, page) => {
        const currentSlide = carousel.pages[page].slides[0];
        const img = currentSlide.el.querySelector('img');
        const existingCaption = currentSlide.el.querySelector('.file_caption');
        const alt = img.getAttribute('alt');

        if (!existingCaption && alt) {
          const captionDiv = document.createElement('p');
          captionDiv.className = 'file_caption';
          captionDiv.textContent = alt;
          currentSlide.el.appendChild(captionDiv);
        }
      };

      once('photoAlbumCustomizations', '.carousel-area', context).forEach(element => {
        // Get the parent album_embed_wrapper to find the source gallery ID
        const albumWrapper = element.closest('.album_wrapper');
        let uniqueId = 'photo_album';

        // If we have an album wrapper with a source gallery ID, use that
        if (albumWrapper && albumWrapper.closest('.album_embed_wrapper')?.getAttribute('data-source-gallery')) {
          uniqueId = `photo_album_${albumWrapper.closest('.album_embed_wrapper').getAttribute('data-source-gallery')}`;
        }

        // Get all slides and update their data-fancybox attribute
        const slides = element.querySelectorAll('.f-carousel__slide');
        slides.forEach(slide => {
          slide.setAttribute('data-fancybox', uniqueId);
        });

        // Get elements specific to this carousel instance
        let carouselIndex = element.querySelector('.carousel_index'),
          carouselCount = element.querySelector('.carousel_count'),
          // Look for toolbar in the album_wrapper instead
          carouselToolbar = albumWrapper ? albumWrapper.querySelector('.fancybox__toolbar__column.is-right') : null,
          downloadUrl = element.querySelector('.is-selected[data-thumb-src]');

        const options = {
          transition: 'slide',
          preload: 3,
          infinite: true,
          adaptiveHeight: false,
          Dots: false,
          Thumbs: {
            type: 'classic',
            Carousel: {
              slidesPerPage: 1,
              Navigation: true,
              center: true,
              fill: true,
              dragFree: true,
              direction: 'ltr',
            },
          },
          Toolbar: {
            display: {
              left: ["infobar"],
              middle: [],
              right: ["thumbs","download","close"]
            }
          },
          on: {
            ready: (carousel, to, from) => {
              const page = carousel.page,
                src = carousel.pages[page].slides[0].el.attributes[2].nodeValue,
                downloadLink = document.createElement("a"),
                newWindowLink = document.createElement("a"),
                hideThumbsLink = document.createElement("a");

              handleCaption(carousel, page);

              newWindowLink.classList.add('f-button', 'fancybox-button--open');
              hideThumbsLink.classList.add('f-button', 'fancybox-button--hide');
              downloadLink.classList.add('f-button', 'fancybox-button--download');

              downloadLink.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"></path></svg>';
              newWindowLink.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>';
              hideThumbsLink.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="5.5" r="1"></circle><circle cx="12" cy="5.5" r="1"></circle><circle cx="18.5" cy="5.5" r="1"></circle><circle cx="5.5" cy="12" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="18.5" cy="12" r="1"></circle><circle cx="5.5" cy="18.5" r="1"></circle><circle cx="12" cy="18.5" r="1"></circle><circle cx="18.5" cy="18.5" r="1"></circle></svg>';

              if (carouselToolbar) {
                carouselToolbar.appendChild(hideThumbsLink);
                carouselToolbar.appendChild(newWindowLink);
                carouselToolbar.appendChild(downloadLink);

                // hide thumbs - scope to this carousel's wrapper
                hideThumbsLink.addEventListener("click", (event) => {
                  const thumbs = albumWrapper.querySelector('.f-carousel__thumbs');
                  if (thumbs) {
                    thumbs.classList.toggle('display-none');
                  }
                });

                carousel.downloadLink = downloadLink;
                carousel.newWindowLink = newWindowLink;
                carousel.hideThumbsLink = hideThumbsLink;

                carousel.downloadLink.href = src;
                carousel.newWindowLink.href = src;
                carousel.downloadLink.setAttribute('download','');
                carousel.newWindowLink.setAttribute('target', '_blank');

                carousel.downloadLink.setAttribute('title', 'Download file');
                carousel.newWindowLink.setAttribute('title', 'Open file in new window');
                carousel.hideThumbsLink.setAttribute('title', 'Hide thumbnails');
                carousel.hideThumbsLink.setAttribute('href', 'javascript:void(0);');

                albumWrapper.classList.add('show_album')
              }
            },
            refresh: (carousel) => {
              resizeContainer(carousel);
              if (carouselCount) {
                carouselCount.innerHTML = carousel.pages.length;
              }
            },
            beforeChange: (carousel, to, from) => {
              resizeContainer(carousel);
            },

            change: (carousel, to, from) => {
              let page = carousel.page,
                src = carousel.pages[page].slides[0].el.attributes[2].nodeValue;
              handleCaption(carousel, page);
              resizeContainer(carousel);

              carousel.downloadLink.href = src;
              carousel.downloadLink.setAttribute('download', '');
              carousel.downloadLink.setAttribute('title', 'Download file');

              carousel.newWindowLink.href = src;
              carousel.newWindowLink.setAttribute('target', '_blank');
              carousel.newWindowLink.setAttribute('title', 'Open file in new window');
              carousel.hideThumbsLink.setAttribute('title', 'Hide thumbnails');

              // Update counter
              if (carouselIndex) {
                carouselIndex.innerHTML = carousel.page + 1;
              }
            },
          },
        };

        // Initialize carousel with the element
        new Carousel(element, options, { Thumbs });
        // Add window resize listener
        window.addEventListener('resize', () => {
          if (Carousel) {
            resizeContainer(Carousel);
          }
        });
      });

      // Fancybox configuration remains the same
      Fancybox.bind("[data-fancybox^='photo_album']", {
        Carousel: {
          infinite: true,
        },
        Thumbs: {
          type: 'classic',
          Carousel: {
            slidesPerPage: 1,
            Navigation: true,
            center: true,
            fill: true,
            dragFree: true,
            direction: 'ltr',
          },
        },
        Slideshow: {
          playOnStart: false,
          timeout: 3000,
        },
        Toolbar: {
          items: {
            openwindow: {
              tpl: '<a title="Open file in new window" target="_blank" class="f-button fancybox-button--open" data-fancybox-new-window><svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a>',
            },
          },
          display: {
            left: [],
            middle: ["infobar"],
            right: ["thumbs", "openwindow", "download", "close"],
          },
        },
        Images: {
          zoom: false,
        },
        tpl: {
          main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
              <div class="fancybox__backdrop"></div>
              <div class="fancybox__toolbar"></div>
              <div class="fancybox__carousel"></div>
              <div class="fancybox__caption"></div>
              <div class="fancybox__footer"></div>
              </div>`,
        },
        on: {
          "Carousel.ready Carousel.change": (fancybox) => {
            const slide = fancybox.getSlide();
            const newWindow = fancybox.container.querySelector('[data-fancybox-new-window]');
            if (newWindow && slide) {
              newWindow.href = slide.src;
            }
          }
        }
      });
    },
  };
})(Drupal, drupalSettings, once);

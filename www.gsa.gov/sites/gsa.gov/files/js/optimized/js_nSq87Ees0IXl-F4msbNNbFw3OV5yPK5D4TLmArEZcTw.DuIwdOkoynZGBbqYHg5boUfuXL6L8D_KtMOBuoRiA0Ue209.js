const mouseover_categories = () => {
  let categoryLinks = document.querySelectorAll('.mask-images .usa-page_category_item'),
    maskIt = document.querySelectorAll('.image-overlay'),
    pic1 = document.getElementById('usa-first_category'),
    pic2 = document.getElementById('usa-second_category'),
    pic3 = document.getElementById('usa-third_category'),
    pic4 = document.getElementById('usa-fourth_category');

  categoryLinks.forEach((categoryLink) => {
    let span = document.createElement("span");
    categoryLink.prepend(span);

    let element = categoryLink.dataset.item;
    categoryLink.addEventListener('mouseover', () => {
      categoryLink.classList.add("active");
      if (element === 'usa-first_category') {
        pic1.style.zIndex = "1";
        maskFirst();
        categoryLinks[0].classList.remove("inactive");
        categoryLinks[1].classList.add("inactive");
        categoryLinks[2].classList.add("inactive");
        categoryLinks[3].classList.add("inactive");
      }
      if (element === 'usa-second_category') {
        pic2.style.zIndex = "1";
        maskSecond();
        categoryLinks[0].classList.add("inactive");
        categoryLinks[1].classList.remove("inactive");
        categoryLinks[2].classList.add("inactive");
        categoryLinks[3].classList.add("inactive");
      }
      if (element === 'usa-third_category') {
        pic3.style.zIndex = "1";
        maskThird();

        categoryLinks[0].classList.add("inactive");
        categoryLinks[1].classList.add("inactive");
        categoryLinks[2].classList.remove("inactive");
        categoryLinks[3].classList.add("inactive");
      }
      if (element === 'usa-fourth_category') {
        pic4.style.zIndex = "1";
        maskFourth();

        categoryLinks[0].classList.add("inactive");
        categoryLinks[1].classList.add("inactive");
        categoryLinks[2].classList.add("inactive");
        categoryLinks[3].classList.remove("inactive");
      }
    });

    categoryLink.addEventListener('mouseout', () => {
      categoryLink.classList.remove("active");
      categoryLinks[0].classList.remove("inactive");
      categoryLinks[1].classList.remove("inactive");
      categoryLinks[2].classList.remove("inactive");
      categoryLinks[3].classList.remove("inactive");
      //   picture.style.zIndex = "0";
      if (element === 'usa-first_category') {
        pic1.style.zIndex = "0";
        maskFirstBack();
      }
      if (element === 'usa-second_category') {
        pic2.style.zIndex = "0";
        maskSecondBack();
      }
      if (element === 'usa-third_category') {
        pic3.style.zIndex = "0";
        maskThirdBack();
      }
      if (element === 'usa-fourth_category') {
        pic4.style.zIndex = "0";
        maskFourthBack();
      }
    });
  });

  function maskFirst() {
    pic1.style.clipPath = "inset(0px 74.5% 0px 0px)"
    pic1.classList.add("active");
  };

  function maskFirstBack() {
    pic1.style.clipPath = "inset(0px 75% 0px 0px)"
    pic1.classList.remove("active");
  };

  function maskSecond() {
    pic2.style.clipPath = "inset(0px 49.5% 0 24%)"
    pic2.classList.add("active");
  };

  function maskSecondBack() {
    pic2.style.clipPath = "inset(0px 50% 0 24.5%)"
    pic2.classList.remove("active");
  };

  function maskThird() {
    pic3.style.clipPath = "inset(0px 24.5% 0px 49.5%)"
    pic3.classList.add("active");
  };

  function maskThirdBack() {
    pic3.style.clipPath = "inset(0px 25% 0px 50%)"
    pic3.classList.remove("active");
  };

  function maskFourth() {
    pic4.style.clipPath = "inset(0px 0px 0px 74.5%)"
    pic4.classList.add("active");
  };

  function maskFourthBack() {
    pic4.style.clipPath = "inset(0px 0px 0px 75%)"
    pic4.classList.remove("active");
  };

}

const hide_video_mobile = () => {
  var media = document.querySelector('.full-screen.video'),
    intViewportWidth = window.innerWidth;

  if (intViewportWidth < 767) {
    media.remove();
  }
}
const view_div_height = () => {
  var max = 0,
    elements = document.querySelectorAll('.view-homepage-news-and-events > .view-content');

  [].reduce.call(elements, function (prev, item) {
    max = Math.max(item.clientHeight, max);

    return function (height) {
      prev(item.style.height = height);
    };
  }, function () {
  })(max + 'px');
}

// moved logic to twig
// const swap_perdiem_link = () => {
//   if(jQuery('#perdiem-section').length > 0) {
//     jQuery('.usa-nav__secondary-item a[href="/travel-resources"]')
//       .attr('href', '#perdiem-section');
//   }
// }
//
// swap_perdiem_link();
view_div_height();
hide_video_mobile()
mouseover_categories()

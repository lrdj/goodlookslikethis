const smooth_scroll = () => {
  var slice = [].slice;
  var navs = slice.call(document.querySelectorAll('.scroller, #scrollto-categories'), 0);
  navs.forEach(function (nav) {
    nav.addEventListener('click', function (e) {
      let attrId = nav.getAttribute('id');
      if(attrId == 'backtotop'){
        e.preventDefault();
      } else if (attrId == 'perdiem-link') {
        if ($('#perdiem-section').length > 0){
          e.preventDefault();
        }
      } else if (attrId == 'scrollto-categories') {
        select_nav('category-navigation');
      }
      if (attrId != 'scrollto-categories') {
        var targetEl = nav.dataset.scrollTo;
        select_nav(targetEl);
      }
    });
  });
  function select_nav(className) {
    var el = document.querySelector('#' + className);
    el.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
    // setTimeout(() => {
    //   el.focus();
    // }, 500);
  }
}
smooth_scroll();

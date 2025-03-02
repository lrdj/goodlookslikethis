
/*
  Fixed navigation when scrolling
 */
const init_sticky_nav = () => {
    $ = jQuery;
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      //var contentHeight = $(".usa-header--extended").height();
      if (y >= 5) {
        $(".usa-header--extended").addClass("locked");
      } else {
        $(".usa-header--extended").removeClass("locked");
      }
    });
}
/*
  Print page according to button
 */
const print_page = () => {
  let slice = [].slice;
  let printButtons = slice.call(document.querySelectorAll('.print-button'), 0);

  printButtons.forEach(function(printButton) {
    printButton.addEventListener('click', function(e) {
      window.print();
    });
  });
}

/*
  Make iframes look correct for responsive layout
 */
const iframe_wrapper = () => {
  $('iframe').each(function() {
    $container = $(this).parent('div').attr('class')
    if ($container != 'embed-responsive' && $container != 'exclude-embed-responsive') {
      if($(this).parents('div').hasClass('frame-16by7')){
        $(this).wrap('<div class="embed-responsive embed-responsive-16by7"></div>');
      }else{
        $(this).wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
      }
    };
  });
}

/*
  The Perdiem link in the header
 */
const perdiem_modal = () => {
  $ = jQuery;
  var showDialog = $(".show_dialog").length;
  var perdiemLink = $("#perdiem-link");
  if(showDialog) {
    $(perdiemLink).removeClass("scroller");
    $(perdiemLink).attr('data-fancybox','');
    $(perdiemLink).attr("data-src","#lookup-dialog");
  } else {
    $(perdiemLink).on('click',function(){
      $('.tb-megamenu-button').trigger('click');
    })
  }
}

/*
  Set focus of menu button
 */
const mobile_menu_focus = () => {
  $ = jQuery;
  $('.gsa-menu-btn').click(
    function(event){
      setTimeout(function() {
        $('.tb-megamenu-button__close-mobile-menu').focus();
      }, 500);
    }
  );
}

const left_nav = () => {
  $ = jQuery;
  if($('#gsa-left-sidebar').length > 0) {
    left_nav_responsive();
    window.addEventListener('resize', function(event) {
      left_nav_responsive();
    });
  }
}

const left_nav_responsive = () => {
  $ = jQuery;
  if (window.innerWidth > 1024) {
    $('#gsa-left-sidebar button.usa-accordion__button')
      .first().attr('aria-disabled', true);
  } else {
    $('#gsa-left-sidebar button.usa-accordion__button')
      .first().attr('aria-disabled', false);
  }
}

left_nav();
perdiem_modal();

init_sticky_nav();
print_page();
iframe_wrapper();
mobile_menu_focus();


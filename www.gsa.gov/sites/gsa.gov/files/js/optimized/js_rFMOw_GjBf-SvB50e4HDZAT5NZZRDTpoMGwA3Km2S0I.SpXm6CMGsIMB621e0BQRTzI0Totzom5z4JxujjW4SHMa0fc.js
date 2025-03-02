const init_top_btn = () => {
  $ = jQuery;
  $(document).scroll(function () {
    // Show and hide the back to top elevator js container
    var y = $(this).scrollTop();
    var contentHeight = $(".insite-text-asset-container").height();
    if (y > 600) {
      $("#backtotop").fadeIn();
      // $("#backtotop").bind("click",function(){
      //   $("#logo").focus();
      // });
    } else {
      $("#backtotop").fadeOut();
    }
    if (y < 600 ){
    }
  });
}
init_top_btn();

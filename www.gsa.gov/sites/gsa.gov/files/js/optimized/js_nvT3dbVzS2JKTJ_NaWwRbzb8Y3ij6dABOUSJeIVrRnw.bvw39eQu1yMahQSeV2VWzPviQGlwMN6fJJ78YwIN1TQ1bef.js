(function ($, Drupal) {
  const banner = $(".has-headline .standard-banner").first()
  const headline = $(".has-headline .standard-banner .headline").first();
  const headline_image = $(".has-headline .standard-banner article.media img").first();
  Drupal.behaviors.gsa_swimlane = {
    attach: function (context) {
      $(window).on("resize", gsa_swimline_on_resize);
      setTimeout(gsa_swimline_on_resize, 500);
    }
  }

  function gsa_swimline_on_resize(){
    var ban_height_modifier = 220
    var bb_height_modifier = 50
    if($(window).width() < 640){
      ban_height_modifier = 90;
      bb_height_modifier = 0;
    }
    var banner_height = $(headline).height() + ban_height_modifier;
    $(banner).css("height", banner_height + "px");
    const bb_height = $(headline).height() + bb_height_modifier;
    const bb_prop_val = "solid " + bb_height + "px #e0e6eb";
    $(banner).css("border-bottom", bb_prop_val);
  }
})(jQuery, Drupal);

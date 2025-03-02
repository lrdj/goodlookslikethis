/*
  Fancy Box modal
 */
const content_modal = () => {
  $ = jQuery;
  //FANCYBOX Inline Content
  Fancybox.bind("[data-fancybox]");
  Fancybox.bind(".popup,.fancybox,.popup-image",{})
  //$('.popup,.fancybox').fancybox();
  //Images
  // $('.popup-image').fancybox({
  //   'type': 'image'
  // });
  //iFrames
  // $('.popup-iframe').fancybox({
  //   'type': 'iframe',
  //   'autoScale': 'true'
  // });
}
content_modal();

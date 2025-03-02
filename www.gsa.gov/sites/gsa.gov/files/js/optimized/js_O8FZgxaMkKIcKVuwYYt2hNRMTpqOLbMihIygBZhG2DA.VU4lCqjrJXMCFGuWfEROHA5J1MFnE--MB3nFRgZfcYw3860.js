const directive_menu_state = () => {
  $ = jQuery;

  var current = location.pathname.split('/')[2];
  $('.directives_sidebar ul li a').each(function () {
    var $this = $(this),
        linkItem = $this.attr('href').split('/')[2],
        linkItem1 = $this.parent('li');

    // if the current path is like this link, make it active
    if(linkItem === current){
      linkItem1.addClass('usa-current');
    }
  });
}
const directive_tab_menu_state = () => {
  $ = jQuery;
  var current = location.pathname.split('/')[3];
  $('.feature_tabs--area ul li a').each(function () {
    var $this = $(this),
      linkItem = $this.attr('href').split('/')[3],
      linkItem1 = $this.parent('li'),
      linkItemQ = linkItem.split('?');

    // if the current path is like this link, make it active
    if(linkItem === current){
      linkItem1.addClass('usa-current');
    } else if (linkItemQ[0] === current){
      linkItem1.addClass('usa-current');
    }
  });
}
directive_tab_menu_state();
directive_menu_state();

jQuery(function () {
  jQuery(document).ready(function () {
    var shareConfig = {
      "Facebook": {
        "url": "http://www.facebook.com/sharer/sharer.php?u=%SHARE_URL%",
        "icon": "facebook-16.jpg"
      },
      "X": {
        "url": "http://twitter.com/intent/tweet?via=interior&amp;url=%SHARE_URL%&amp;text=%SHARE_TITLE%",
        "icon": "x.png"
      },
      "LinkedIn": {
        "url": "http://www.linkedin.com/shareArticle?mini=true&url=%SHARE_URL%&title=%SHARE_TITLE%",
        "icon": "linkedin-16.png"
      },
      "Email": {
        "url": "mailto:?subject=You might be interested in this information on GSA.gov&body=You might be interested in this information on GSA.gov - %SHARE_URL%",
        "icon": "email-16.png"
      }
    };
    var currentPage = window.location.href;
    var title = document.title;
    if (typeof imagePath === 'undefined') {
      imagePath = "/modules/custom/topic_page_customizations/modules/topic_page_footer/img/"
    };
    var shareHTML = '<div id="share-box"><ul>';

    jQuery.each(shareConfig, function (name, site) {
      shareHTML = shareHTML + '<li><a title="Open link in a new window" href="' + site.url.replace("%SHARE_URL%", encodeURIComponent(currentPage)).replace("%SHARE_TITLE%", encodeURIComponent(title)) + '" target="_blank"><img src="' + imagePath + site.icon + '" alt="Share on ' + name + '" />' + name + '</a></li>';
    });
    shareHTML = shareHTML + '</ul></div>';
    var attempts = 0;

    var setup_share_hover = function () {
      attempts ++;
      var $share_page = jQuery('#share_page');
      if($share_page.length === 0 && attempts <= 5){
        window.setTimeout(setup_share_hover, 1000);
      }else {
        $share_page.hover(function (e) {
          jQuery(this).append(shareHTML);
        }, function () {
          jQuery('#share_page div').remove();
        });
      }
    }

    setup_share_hover();
  });
});

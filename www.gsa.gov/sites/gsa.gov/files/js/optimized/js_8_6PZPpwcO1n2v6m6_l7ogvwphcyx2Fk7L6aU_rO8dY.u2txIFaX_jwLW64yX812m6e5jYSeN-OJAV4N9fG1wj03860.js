var sfla_markups = {
  sf_573t0000000Gmas: "<div>\n" +
    "    <button class=\"usa-button usa-tooltip\" data-position=\"bottom\"\n" +
    "            id=\"liveagent_button_online_573t0000000Gmas\"\n" +
    "            onclick=\"liveagent.startChat('573t0000000Gmas')\"\n" +
    "            style=\"display: none;\" title=\"Chat now button\" type=\"button\">Chat\n" +
    "        now!<!-- Online Chat Content --></button>\n" +
    "    <button class=\"usa-button usa-tooltip\" data-position=\"bottom\"\n" +
    "            id=\"liveagent_button_offline_573t0000000Gmas\"\n" +
    "            onclick=\"liveagent.startChat('573t0000000Gmas')\"\n" +
    "            style=\"display: none;\" title=\"Chat now button\" type=\"button\">Chat\n" +
    "        now!<!-- Offline Chat Content --></button>\n" +
    "<script src='https://la1-c1-ttd.salesforceliveagent.com/content/g/js/54.0/deployment.js'></script>\n" +
    "</div>\n",
  sf_573t0000000Gmas_after: async function () {
    if(typeof liveagent !== 'undefined') {
      liveagent.init('https://la1-c1-ttd.salesforceliveagent.com/chat',
        '57230000000MOoh', '00D30000000JVLI');
      if (!window._laq) {
        window._laq = [];
      }
      window._laq.push(function () {
        liveagent.showWhenOnline('573t0000000Gmas',
          document.getElementById('liveagent_button_online_573t0000000Gmas'));
        liveagent.showWhenOffline('573t0000000Gmas',
          document.getElementById('liveagent_button_offline_573t0000000Gmas'));
      });
      liveagent.addCustomDetail('Referring Site', window.location.href);
      liveagent.addCustomDetail('Referring Site Title', document.title);
    }else{
      setTimeout(sfla_markups.sf_573t0000000Gmas_after, 200)
    }
  },
  sf_57330000000IEfy: "<p><img alt=\"Chat Now button\" id=\"liveagent_button_online_57330000000IEfy\"\n" +
    "        onclick=\"liveagent.startChat('57330000000IEfy'); _gaq.push(['_trackEvent','Live Chat','ITS Click',this.href]);\"\n" +
    "        src=\"/system/files/CVNChatButton.jpg\" style=\" display: none; cursor: pointer; border: 0;\"\n" +
    "        title=\"Chat Now Button \"/><!-- Online Chat Content --></p>\n" +
    "<script src='https://c.la1s1.salesforceliveagent.com/content/g/js/29.0/deployment.js'></script>\n" +
    "<p>\n",
  sf_57330000000IEfy_after: async function () {
    if(typeof liveagent !== 'undefined') {
      liveagent.init('https://d.la1s1.salesforceliveagent.com/chat',
        '57230000000MQ9b', '00D30000000JVLI');
      if (!window._laq) {
        window._laq = [];
      }
      window._laq.push(function () {
        liveagent.showWhenOnline('57330000000IEfy',
          document.getElementById('liveagent_button_online_57330000000IEfy'));
        liveagent.showWhenOffline('57330000000IEfy',
          document.getElementById('liveagent_button_offline_57330000000IEfy'));
      });
    }else{
      setTimeout(sfla_markups.sf_57330000000IEfy_after, 400)
    }
  }
};

(function ($, Drupal) {
  Drupal.behaviors.gsa_sf_live_agent = {
    attach: function (context) {
      $("div.sf_live_agent").each(function () {
        var sfla_id = $(this).attr('data-sfla-id');
        if (sfla_id && sfla_markups.hasOwnProperty(sfla_id)) {
          $(this).append(sfla_markups[sfla_id]);
          sfla_markups[sfla_id + '_after']()
        }
      });
    }
  }
})(jQuery, Drupal);

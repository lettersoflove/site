import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import Swiper from 'swiper';
import teamDetail from "./team_detail.js"

$(document).ready(function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });
  teamDetail();
})


import { teamTabs } from "./team_tabs.js";
import changemakers from "./changemakers.js";

if ( document.querySelector(".team-tabs") ) {
  teamTabs();
};

if ($(`#js-changemakers`).length > 0) {
  $(`body`).addClass(`changemakers`);
  changemakers();
}


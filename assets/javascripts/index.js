import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';

import { teamTabs } from "./team_tabs.js";
import changemakers from "./changemakers.js";

if ( document.querySelector(".team-tabs") ) {
  teamTabs();
};

if ($(`#js-changemakers`).length > 0) {
  $(`body`).addClass(`changemakers`);
  changemakers();
}

import $ from "npm:jquery@3.5.1";
import carousel from "./_modules/carousel.js";
import embed from "./_modules/embed.js";

import "npm:salvattore@1.0.9";

require("./_modules/jquery.lazyscript.js");

carousel($(".carousel"));

$(window).lazyScript({
  selectorClass: "ui-lazy",
  callback: function ($item) {
    embed($item);
  },
});

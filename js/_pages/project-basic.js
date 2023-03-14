import $ from "jquery";
import embed from "../modules/embed";

require("salvattore");
require("../modules/jquery.lazyscript");

$(window).lazyScript({
  selectorClass: "ui-lazy",
  callback: function ($item) {
    embed($item);
  },
});

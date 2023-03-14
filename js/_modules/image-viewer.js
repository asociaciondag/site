"use strict";

import $ from "jquery";
require("magnific-popup");

export default function init() {
  $("html").on("click", ".ui-image-viewer", function (e) {
    e.preventDefault();

    $.magnificPopup.open({
      items: {
        src: $(this).attr("href"),
      },
      type: "image",
      mainClass: "mfp-with-zoom",
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
      },
    });
  });
}

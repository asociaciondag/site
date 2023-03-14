import $ from "npm:jquery@3.5.1";

export function menuMobile($button) {
  const $html = $("html");

  $button.click(function (e) {
    e.preventDefault();

    $html.toggleClass("has-menu-opened");
  });
}

export function menuLanguage($element) {
  $element.on("click", ".is-active", function (e) {
    e.preventDefault();

    $element.toggleClass("is-opened");
  });
}

export function sticky($element) {
  const $window = $(window);
  let timeout;

  $window.on("scroll", function () {
    if (timeout) {
      return;
    }

    timeout = setTimeout(function () {
      if ($window.scrollTop() > 25) {
        $element.addClass("is-sticky");
      } else {
        $element.removeClass("is-sticky");
      }

      timeout = undefined;
    }, 100);
  }).trigger("scroll");
}

import $ from "npm:jquery@3.5.1";

export default function init($element) {
  let code = $element.next('script[type="text/embed-code"]')
    .text()
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

  code = $.parseHTML(code, document, true);

  $element.html(code);
}

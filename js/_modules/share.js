import $ from "npm:jquery@3.5.1";

export default function init(selector) {
  $(selector).click(function (e) {
    e.preventDefault();

    window.open(
      $(this).attr("href"),
      "share",
      "toolbar=0, status=0, width=650, height=360",
    );
  });
}

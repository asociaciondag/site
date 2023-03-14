import $ from "npm:jquery@3.5.1";

export default function init(containerSelector, buttonSelector) {
  const $container = $(containerSelector);

  $("body").on("click", buttonSelector, function (e) {
    const $this = $(this);

    $this.fadeTo("normal", 0.3);

    $.ajax({
      url: $(this).attr("href"),
    })
      .done(function (response) {
        const $temp = $("<div></div>").append($.parseHTML(response));

        $container.append($temp.find(containerSelector).children());
        $this.replaceWith($temp.find(buttonSelector));
      });

    e.preventDefault();
  });
}

export default function init($element) {
  let accepted = false;

  try {
    accepted = window.localStorage.getItem("acceptedCookies");
  } catch {
    // Ignored
  }

  if (!accepted) {
    $element.removeClass("is-hidden");
  }

  $element.on("click", "button", function (event) {
    window.localStorage.setItem("acceptedCookies", true);
    event.preventDefault();
    $element.fadeOut();
  });
}

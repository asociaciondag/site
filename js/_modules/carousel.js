import "./jquery.carro.js";

export default function init($element) {
  $element.carro({
    fitToLimits: true,
    buttons: $element.find(".ui-nav"),
    fluid: true,
    autoPlay: true,
  });

  $element.on("mouseenter", function () {
    $element.carro("stop");
  });

  $element.on("mouseleave", function () {
    $element.carro("play");
  });
}

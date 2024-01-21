function generateRecepy(event) {
  event.preventDefault();

  new Typewriter("#recepy-ingredients", {
    strings: ["The recepy"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recepyFormElement = document.querySelector("#recepy-generator-form");
recepyFormElement.addEventListener("submit", generateRecepy);

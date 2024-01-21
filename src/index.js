function displayRecepy(response) {
  new Typewriter("#recepy-ingredients", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecepy(event) {
  event.preventDefault();

  let ingredientsInput = document.querySelector("#user-ingredients");
  let apiKey = "0t30d9c2bfb348e86oa6585b9339d079";
  let prompt = `User instructions: generate a recepy with the ingredients given in ${ingredientsInput.value}`;
  let context =
    "You are an amazing chef that can cook with everything that is given to him and can come up with amazing and delicious recipes. Weither it is heathy or not, and budged friendly. Your mission is to generate a recipe based on the ingredients given to you and explain how it should be cooked. The structure of each ingredient and each step has it own line and CAN'T be next to each other.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let ingredientElement = document.querySelector(".recepy-instruction");
  ingredientElement.classList.remove("hidden");
  ingredientElement.innerHTML = `<div class= "generating"> 🧑‍🍳Generating the recipe ..... </div> `;

  axios.get(apiURL).then(displayRecepy);
}

let recepyFormElement = document.querySelector("#recepy-generator-form");
recepyFormElement.addEventListener("submit", generateRecepy);

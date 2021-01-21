let colorInput = document.querySelector("input[type='color']");
let radio = document.querySelector(".raio-container .fake-radio");

let colorVar = getComputedStyle(document.body).getPropertyValue("--black");

colorInput.addEventListener("change", () => {
  document.documentElement.style.setProperty("--black", colorInput.value);
});

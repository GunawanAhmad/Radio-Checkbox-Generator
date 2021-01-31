let settingsTab = document.querySelectorAll(".editor ul li .edit-title");

settingsTab.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tab.parentElement.classList.toggle("show");
  });
});

let htmlCode = document.querySelector(".html-section textarea");
let cssCode = document.querySelector(".css-section textarea");
const root = document.querySelector(":root");
const rootVal = getComputedStyle(root);

let checkboxHtml = `<label class="checkbox-container">
    Custom Checkbox
    <input type="checkbox" />
    <span class="fake-checkbox"></span>
</label>`;

let checkboxCss = `.checkbox-container {
  position: relative;
  padding-left: 25px;
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0.5rem 0;
}


.checkbox-container input {
  opacity: 0;
}


.checkbox-container .fake-checkbox {
  position: absolute;
  left: 0;
  top: -1px;
  height: 100%;
  width: 20px;
  border: 1px solid var(--black);
}


.checkbox-container .fake-checkbox::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%) rotate(45deg);
  height: 0px;
  width: 0px;
  /* background-color: var(--black); */
  border: solid var(--black);
  border-width: 0 2px 2px 0;
  transition: all 150ms ease;
  opacity: 0;
}


.checkbox-container input:checked ~ .fake-checkbox::before {
  height: 50%;
  width: 30%;
  opacity: 1;
}


.checkbox-container input:disabled ~ .fake-checkbox::before {
  background-color: grey;
  opacity: 0.7;
}



.checkbox-container input:disabled ~ .fake-checkbox {
  border: 1px solid grey;
  opacity: 0.7;
}`;

htmlCode.value = checkboxHtml;
cssCode.value = checkboxCss;

function changeRootVal(variable, value) {
  root.style.setProperty(variable, value);
}

//base color var
let baseColor = "#f8f8f8";
let baseColorInput = document.querySelector('.base-color input[type="color"');
let baseColorInputHex = document.querySelector('.base-color input[type="text"');

//border color var
let borderColor = "#f8f8f8";
let borderThickness = 1;
let border = `${borderThickness}px solid ${borderColor}`;
let borderColorInput = document.querySelector(
  '.border-color input[type="color"'
);

let borderColorInputHex = document.querySelector(
  '.border-color input[type="text"]'
);

let isUseBorder = document.querySelector(
  '.border-color input[type="checkbox"]'
);

let borderThickInput = document.querySelector(
  '.border-color input[type="number"]'
);

//background color var
let backgroundColor = "transparent";
let backgroundColorInput = document.querySelector(
  '.background-color input[type="color"]'
);
let backgroundColorInputHex = document.querySelector(
  '.background-color input[type="text"]'
);
let isUseBackground = document.querySelector(
  '.background-color input[type="checkbox"]'
);

//

//base color
baseColorInput.value = baseColor;
baseColorInputHex.value = baseColor;
baseColorInputHex.value = baseColorInput.value;

baseColorInput.addEventListener("change", () => {
  baseColor = baseColorInput.value;
  baseColorInputHex.value = baseColorInput.value;
  changeRootVal("--result-color", baseColor);
  changeBorder(baseColor, borderThickness);
});

baseColorInputHex.addEventListener("change", () => {
  baseColor = baseColorInputHex.value;
  baseColorInput.value = baseColorInputHex.value;
  changeRootVal("--result-color", baseColor);
  changeRootVal("--result-border", baseColor);
});

//background color;
isUseBackground.addEventListener("click", () => {
  if (isUseBackground.checked) {
    backgroundColor = backgroundColorInput.value;
    changeRootVal("--result-background", backgroundColor);
  } else {
    backgroundColor = "transparent";
    changeRootVal("--result-background", backgroundColor);
  }
});

backgroundColorInput.addEventListener("change", () => {
  backgroundColor = backgroundColorInput.value;
  backgroundColorInputHex.value = backgroundColorInput.value;
  changeRootVal("--result-backround", backgroundColorInput.value);
});

backgroundColorInputHex.addEventListener("change", () => {
  backgroundColor = backgroundColorInputHex.value;
  backgroundColorInput.value = backgroundColorInputHex.value;
  changeRootVal("--result-backround", backgroundColorInputHex.value);
});

//border
borderThickInput.addEventListener("change", () => {
  borderThickness = borderThickInput.value;
  border = `${borderThickness}px solid ${borderColor}`;
  changeRootVal("--result-border", border);
});

borderColorInput.addEventListener("change", () => {
  changeBorder(borderColorInput.value, borderThickness);
});

borderColorInputHex.addEventListener("change", () => {
  changeBorder(borderColorInputHex.value, borderThickness);
});

isUseBorder.addEventListener("click", () => {
  if (isUseBorder.checked) {
    changeRootVal("--result-border", border);
  } else {
    changeRootVal("--result-border", "none");
  }
});

function changeBorder(color, thick) {
  borderColorInput.value = color;
  borderColorInputHex.value = color;
  borderColor = color;
  borderThickness = thick;
  border = `${borderThickness}px solid ${borderColor}`;
  changeRootVal("--result-border", border);
}

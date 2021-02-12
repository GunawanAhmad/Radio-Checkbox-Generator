let settingsTab = document.querySelectorAll(".editor ul li .edit-title");
let cards = document.querySelectorAll(".card");
let radioSize = "70%";
let isSelect = false;
let pos = {
  top: "50%",
  bottom: "unset",
  transform: "translate(-50%, -50%)",
};
let opacityVal = 0.5;
let selectedInput = "radio";

let customizeSection = document.querySelector(".customize-section");
let codeSection = document.querySelector(".code-section");
let htmlCode = document.querySelector(".html-section textarea");
let cssCode = document.querySelector(".css-section textarea");
const root = document.querySelector(":root");
const rootVal = getComputedStyle(root);

//base color var
let baseColor = "#f8f8f8";
let baseColorInput = document.querySelector('.base-color input[type="color"');
let baseColorInputHex = document.querySelector('.base-color input[type="text"');

//border color var
let borderColor = "#f8f8f8";
let useBorder = true;
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

borderThickInput.value = borderThickness;

//background color var
let backgroundColor = "transparent";
let backgroundColorInput = document.querySelector(
  '.background-color input[type="color"]'
);
backgroundColorInput.value = "#ca3e47";
let backgroundColorInputHex = document.querySelector(
  '.background-color input[type="text"]'
);
backgroundColorInputHex.value = backgroundColorInput.value;
let isUseBackground = document.querySelector(
  '.background-color input[type="checkbox"]'
);

//disabled input var
let disabledVerInput = document.querySelector(".disabled-ver input");
let disValElm = document.querySelector(".disabled-ver .val-container p");

let useBackground = false;

//for copy function
let htmlText = document.querySelector(".html-section textarea");
let cssText = document.querySelector(".css-section textarea");
let htmlCopyBtn = document.querySelector(".html-section button");
let cssCopyBtn = document.querySelector(".css-section button");

//checkmark var
let checkmarkColorInput = document.querySelector(
  '.checkmark input[type="color"'
);

let checkmarkColorInputHex = document.querySelector(
  '.checkmark input[type="text"'
);

let checkmarkColor = "#313131";

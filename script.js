let settingsTab = document.querySelectorAll(".editor ul li .edit-title");
let cards = document.querySelectorAll(".card");
let radioSize = "70%";
let isSelect = false;
let pos = {
  top: "50%",
  bottom: "unset",
  transform: "translate(-50%, -50%)",
};

let customizeSection = document.querySelector(".customize-section");
let codeSection = document.querySelector(".code-section");

codeSection.style.display = "none";
customizeSection.style.display = "none";

settingsTab.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tab.parentElement.classList.toggle("show");
  });
});

let htmlCode = document.querySelector(".html-section textarea");
let cssCode = document.querySelector(".css-section textarea");
const root = document.querySelector(":root");
const rootVal = getComputedStyle(root);

function changeCodeValue() {
  let radioHtml = `<label class="radio-container">
  Custom Radio Button
  <input type="radio" />
  <span class="fake-radio"></span>
</label>`;

  let radioCss = `.radio-container {
  position: relative;
  padding-left: 30px;
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0.5rem 0;
}


.radio-container input {
  opacity: 0;
}


.radio-container .fake-radio {
  position: absolute;
  left: 0;
  top: -1px;
  height: 100%;
  width: 20px;
  border: ${border};
  border-radius: 50%;
  background-color: ${backgroundColor};

}


.radio-container .fake-radio::before {
  content: "";
  position: absolute;
  left: 50%;
  top: ${pos.top};
  bottom : ${pos.bottom};
  transform: ${pos.transform};
  height: 0px;
  width: 0px;
  background-color: ${baseColor};
  border-radius: 50%;
  transition: all 150ms ease;
}


.radio-container input:checked ~ .fake-radio::before {
  height: ${radioSize};
  width: ${radioSize};
}


.radio-container input:disabled ~ .fake-radio::before {
  background-color: grey;
  opacity: 0.7;
}



.radio-container input:disabled ~ .fake-radio {
  border: 1px solid grey;
  opacity: 0.7;
}`;
  htmlCode.value = radioHtml;
  cssCode.value = radioCss;
}

function changeRootVal(variable, value) {
  root.style.setProperty(variable, value);
}

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

let useBackground = false;

changeCodeValue();

//click the card
let currSelect = 0;
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    cards[currSelect].classList.remove("selected");
    card.classList.toggle("selected");
    currSelect = index;
    customizeSection.style.display = "";
    codeSection.style.display = "";

    checkCard(card);
  });
});

function checkCard(elm) {
  let cls = elm.classList;
  switch (true) {
    case cls.contains("radio1"):
      useBackground = false;
      useBorder = true;
      isUseBackground.checked = false;
      isUseBorder.checked = true;
      radioSize = "70%";
      changeBaseColor("#f8f8f8");
      changebackground(backgroundColorInput.value);
      changeBorder(baseColor, borderThickness);
      changeRootVal("--result-radio-size", "70%");
      changePosition("50%", "unset", "-50");

      break;
    case cls.contains("radio2"):
      useBackground = true;
      isUseBorder.checked = false;
      isUseBackground.checked = true;
      useBorder = false;
      radioSize = "40%";
      changebackground("#ca3e47");
      changeBaseColor("#f8f8f8");
      changeRootVal("--result-border", "none");
      changeRootVal("--result-radio-size", "40%");
      changePosition("50%", "unset", "-50");

      break;
    case cls.contains("radio3"):
      useBackground = true;
      isUseBackground.checked = true;
      isUseBorder.checked = false;
      useBorder = false;
      radioSize = "80%";
      changebackground("#f8f8f8");
      changeBaseColor("#ca3e47");
      changeRootVal("--result-border", "none");
      changeRootVal("--result-radio-size", "80%");
      changePosition("unset", "0", "0");
      break;
    case cls.contains("checkbox1"):
      break;
    case cls.contains("checkbox2"):
      break;
    case cls.contains("checkbox3"):
      break;
    default:
      break;
  }
}

//base color
baseColorInput.value = baseColor;
baseColorInputHex.value = baseColor;
baseColorInputHex.value = baseColorInput.value;

baseColorInput.addEventListener("change", () => {
  changeBaseColor(baseColorInput.value);
});

baseColorInputHex.addEventListener("change", () => {
  changeBaseColor(baseColorInputHex.value);
});

function changeBaseColor(color) {
  baseColor = color;
  baseColorInput.value = color;
  baseColorInputHex.value = color;
  changeRootVal("--result-color", baseColor);
  if (useBorder) {
    changeRootVal("--result-border", baseColor);
  }
}

//background color;
isUseBackground.addEventListener("click", () => {
  if (isUseBackground.checked) {
    backgroundColor = backgroundColorInput.value;
    useBackground = true;
    changeRootVal("--result-background", backgroundColor);
  } else {
    backgroundColor = "transparent";
    useBackground = false;
    changeRootVal("--result-background", backgroundColor);
  }
});

backgroundColorInput.addEventListener("change", () => {
  changebackground(backgroundColorInput.value);
});

backgroundColorInputHex.addEventListener("change", () => {
  changebackground(backgroundColorInputHex.value);
});

function changebackground(val) {
  if (useBackground) {
    backgroundColor = val;
    backgroundColorInput.value = val;
    backgroundColorInputHex.value = val;
    changeRootVal("--result-background", val);
    changeCodeValue();
  } else {
    backgroundColor = "transparent";
    backgroundColorInput.value = val;
    backgroundColorInputHex.value = val;
    changeRootVal("--result-background", "transparent");
    changeCodeValue();
  }
}

//border
borderThickInput.addEventListener("change", () => {
  borderThickness = borderThickInput.value;
  border = `${borderThickness}px solid ${borderColor}`;
  changeRootVal("--result-border", border);
  changeBorder(borderColorInput.value, borderThickInput.value);
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
  changeCodeValue();
}

//position
function changePosition(top, bottom, Htransform) {
  changeRootVal("--result-bottom", bottom);
  changeRootVal("--result-top", top);
  let transform = `translate(-50%, ${Htransform}%)`;
  changeRootVal("--result-transform", transform);
  pos.top = top;
  pos.bottom = bottom;
  pos.transform = transform;
  changeCodeValue();
}

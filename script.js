codeSection.style.display = "none";
customizeSection.style.display = "none";
// changeDisabledVer(disabledVerInput.value);
settingsTab.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tab.parentElement.classList.toggle("show");
  });
});

function changeRootVal(variable, value) {
  root.style.setProperty(variable, value);
}

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
      changeResultType("radio", "radio1");
      selectedInput = "radio";
      selectedStyle = "radio1";
      changeEditorTab();
      useBackground = false;
      useBorder = true;
      isUseBackground.checked = false;
      isUseBorder.checked = true;
      radioSize = "70%";
      changeBaseColor("#313131");
      changebackground(backgroundColorInput.value);
      changeBorder(baseColor, borderThickness);
      changeRootVal("--result-radio-size", "70%");
      changePosition("50%", "unset", "-50");

      break;
    case cls.contains("radio2"):
      selectedInput = "radio";
      selectedStyle = "radio2";
      changeEditorTab();

      useBackground = true;
      isUseBorder.checked = false;
      isUseBackground.checked = true;
      useBorder = false;
      radioSize = "40%";
      changeBorder("313131");
      changebackground("#ca3e47");
      changeBaseColor("#f8f8f8");
      changeRootVal("--result-border", "none");
      changeRootVal("--result-radio-size", "40%");
      changePosition("50%", "unset", "-50");

      break;
    case cls.contains("radio3"):
      selectedInput = "radio";
      selectedStyle = "radio3";
      changeEditorTab();

      useBackground = true;
      isUseBackground.checked = true;
      isUseBorder.checked = false;
      useBorder = false;
      radioSize = "80%";
      changebackground("#a2a2a2");
      changeBaseColor("#ca3e47");
      changeRootVal("--result-border", "none");
      changeRootVal("--result-radio-size", "80%");
      changePosition("unset", "0", "0");
      break;
    case cls.contains("checkbox1"):
      changeResultType("checkbox", "checkbox1");
      selectedInput = "checkbox";
      selectedStyle = "checkbox1";
      changeEditorTab();
      checkmarkTransform = "translate(-50%, -50%) rotate(45deg)";

      isUseBackground.checked = true;
      useBackground = true;
      useBorder = false;
      isUseBorder.checked = false;
      checkmarkTop = "40%";
      borderRadius = "5%";
      checkmarkThick = 3;
      checkmarkSize.height = "50%";
      checkmarkSize.width = "30%";
      checkmarkBg = "transparent";
      changebackground("#a2a2a2");
      changeRootVal("--result-border", "none");
      changeBaseColor("#ca3e47");
      changePosition("unset", "0", "0");
      changeCheckmark("#313131");
      changeRootVal("--result-border-radius", "5%");
      changeRootVal("--result-checkmark-thick", "3px");
      changeRootVal("--result-checkmark-background", "transparent");
      changeRootVal("--result-top", "40%");
      changeRootVal("--result-checkmark-height", "50%");
      changeRootVal("--result-checkmark-width", "30%");
      changeRootVal(
        "--result-checkmark-transform",
        "translate(-50%, -50%) rotate(45deg)"
      );

      break;
    case cls.contains("checkbox2"):
      changeResultType("checkbox", "checkbox2");
      selectedInput = "checkbox";
      selectedStyle = "checkbox2";
      changeEditorTab();
      checkmarkBg = "transparent";
      checkmarkTransform = "translate(-50%, -50%) rotate(45deg)";

      isUseBackground.checked = true;
      useBackground = true;
      useBorder = false;
      isUseBorder.checked = false;
      checkmarkTop = "40%";
      borderRadius = "50%";
      checkmarkThick = 3;
      checkmarkSize.height = "50%";
      checkmarkSize.width = "30%";
      changebackground("#a2a2a2");
      changeRootVal("--result-border", "none");
      changeBaseColor("#ca3e47");
      changePosition("unset", "0", "0");
      changeCheckmark("#313131");

      changeRootVal("--result-border-radius", "50%");
      changeRootVal("--result-checkmark-thick", "3px");
      changeRootVal("--result-checkmark-background", "transparent");
      changeRootVal("--result-top", "40%");

      changeRootVal("--result-checkmark-height", "50%");
      changeRootVal("--result-checkmark-width", "30%");
      changeRootVal(
        "--result-checkmark-transform",
        "translate(-50%, -50%) rotate(45deg)"
      );

      break;
    case cls.contains("checkbox3"):
      changeResultType("checkbox", "checkbox3");
      selectedInput = "checkbox";
      selectedStyle = "checkbox3";
      changeEditorTab();
      checkmarkBg = "#313131";
      checkmarkTransform = "translate(-50%, -50%) rotate(0deg)";

      isUseBackground.checked = true;
      useBackground = true;
      useBorder = false;
      isUseBorder.checked = false;
      checkmarkTop = "50%";
      borderRadius = "5%";
      checkmarkThick = 0;
      checkmarkSize.height = "70%";
      checkmarkSize.width = "70%";
      changebackground("#a2a2a2");
      changeCheckmark("#313131");
      changeRootVal("--result-border", "none");
      changeBaseColor("#ca3e47");
      changePosition("unset", "0", "0");
      changeRootVal("--result-border-radius", "5%");
      changeRootVal("--result-checkmark-background", "#313131");
      changeRootVal("--result-checkmark-thick", "0");
      changeRootVal("--result-checkmark-height", "70%");
      changeRootVal("--result-checkmark-width", "70%");
      changeRootVal(
        "--result-checkmark-transform",
        "translate(-50%, -50%) rotate(0deg)"
      );
      changeRootVal("--result-top", "50%");

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
  if (isUseBorder.checked) {
    border = `${borderThickness}px solid ${borderColor}`;
    changeRootVal("--result-border", border);
    changeBorder(borderColorInput.value, borderThickness);
  }
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
    changeBorder(borderColorInput.value, borderThickness);
  } else {
    changeRootVal("--result-border", "none");
  }
});

function changeBorder(color, thick) {
  borderColorInput.value = color;
  borderColorInputHex.value = color;
  borderColor = color;
  borderThickness = thick;
  if (isUseBorder.checked) {
    border = `${borderThickness}px solid ${borderColor}`;
    changeRootVal("--result-border", border);
    changeCodeValue();
  } else {
    border = "none";
    changeRootVal("--result-border", border);
    changeCodeValue();
  }
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

//change disabled version
disabledVerInput.addEventListener("input", (e) => {
  changeDisabledVer(e.target.value);
});

function changeDisabledVer(val) {
  disValElm.style.left = val * 10 - 5 + "%";
  disValElm.textContent = val * 10 + "%";
  opacityVal = val / 10;
  changeRootVal("--result-disabled-opacity", opacityVal);
  changeCodeValue();
}

//copy function

function copyCode(val) {
  let elm = document.createElement("textarea");
  elm.style.position = "absolute";
  elm.style.left = "-999999";
  elm.value = val;
  document.body.appendChild(elm);

  elm.select();
  elm.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
}

htmlCopyBtn.addEventListener("click", () => {
  copyCode(htmlText.value);
});
cssCopyBtn.addEventListener("click", () => {
  copyCode(cssText.value);
});

function changeResultType(type, className) {
  let containers = document.querySelectorAll(
    `.result-card .${selectedInput}-container`
  );
  containers.forEach((con) => {
    con.className = `${type}-container`;
  });
  let fakeContainers = document.querySelectorAll(".result-card .fake");

  fakeContainers.forEach((con) => {
    if (type == "radio") {
      con.classList.add("fake-radio");
      con.classList.remove("checkmark");
    } else {
      con.classList.add("checkmark");
      con.classList.remove("fake-radio");
    }
    con.classList.add(className);
  });

  let inputs = document.querySelectorAll(".result-card input");
  inputs.forEach((input) => {
    input.type = `${type}`;
  });
}

//checkmark

function changeCheckmark(val) {
  if (selectedStyle === "checkbox3") {
    changeRootVal("--result-checkmark-background", val);
  } else {
    checkmarkColorInput.value = val;
    checkmarkColorInputHex.value = val;
    checkmarkColor = val;
    checkmarkBorderClr = val;

    changeRootVal("--result-checkmark-color", val);
  }
}

function changeCheckmarkThickness(val) {
  checkmarkThick = val + "px";
  checkmarkThickInput.value = val;
  changeRootVal("--result-checkmark-thick", val);
}

checkmarkThickInput.addEventListener("change", (e) => {
  changeCheckmarkThickness(e.target.value);
});

checkmarkColorInput.addEventListener("change", (e) => {
  changeCheckmark(e.target.value);
});

checkmarkColorInputHex.addEventListener("change", (e) => {
  changeCheckmark(e.target.value);
});

function changeEditorTab() {
  if (selectedInput === "radio") {
    settingsTab[0].parentElement.classList.remove("hide");
    settingsTab[0].parentElement.classList.add("show");

    settingsTab[1].parentElement.classList.add("hide");
  } else {
    if (selectedStyle === "checkbox3") {
      checkmarkThickInput.parentElement.parentElement.style.display = "none";
    } else {
      checkmarkThickInput.parentElement.parentElement.style.display = "";
    }
    settingsTab[0].parentElement.classList.add("hide");
    settingsTab[1].parentElement.classList.add("show");

    settingsTab[1].parentElement.classList.remove("hide");
  }
}

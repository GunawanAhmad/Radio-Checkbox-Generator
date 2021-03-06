function changeCodeValue() {
  let code = null;
  if (selectedInput === "radio") {
    code = radioCode();
  } else {
    code = checkboxCode();
  }
  htmlCode.value = code.Html;
  cssCode.value = code.Css;
}

function radioCode() {
  let Html = `<label class="radio-container">
    Custom Radio Button
    <input type="radio" name="radio"/>
    <span class="fake-radio"></span>
  </label>`;

  let Css = `.radio-container {
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
  
  
  .radio-container input:disabled ~ .fake-radio {
    border: 1px solid grey;
    opacity: ${opacityVal};
  }`;

  return {
    Html,
    Css,
  };
}

function checkboxCode() {
  let Html = `<label class="checkbox-container">
    Custom Checkbox
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>`;

  let Css = `.checkbox-container {
    position: relative;
    padding-left: 30px;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0.5rem 0;
  }
  
  .checkbox-container input {
    opacity: 0;
  }
  
  .checkbox-container .checkmark {
    position: absolute;
    left: 0;
    top: -1px;
    height: 100%;
    width: 20px;
    border: ${border};
    background : ${backgroundColor};
    border-radius : ${borderRadius};
  }
  
  .checkbox-container .checkmark::before {
    content: "";
    position: absolute;
    left: 50%;
    top: ${checkmarkTop};
    transform: ${checkmarkTransform};
    height: 0px;
    width: 0px;
    border: solid ${checkmarkBorderClr};
    border-width: 0 ${checkmarkThick}px ${checkmarkThick}px 0;
    transition: all 150ms ease;
    opacity: 0;
    background-color : ${checkmarkBg};
  }
  
  .checkbox-container input:checked ~ .checkmark::before {
    height: ${checkmarkSize.height};
    width: ${checkmarkSize.width};
    opacity: 1;
  }
  
  .checkbox-container input:disabled ~ .checkmark::before {
    opacity: 0.7;
  }

  
  .checkbox-container input:disabled ~ .checkmark {
    opacity: 0.7;
  }
  `;

  return {
    Html,
    Css,
  };
}

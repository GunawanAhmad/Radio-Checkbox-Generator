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
    <span class="fake-checkbox"></span>
  </label>`;

  let Css = `checkbox-container {
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
    /* background-color: grey; */
    opacity: 0.7;
  }
  
  
  
  .checkbox-container input:disabled ~ .fake-checkbox {
    border: 1px solid grey;
    opacity: 0.7;
  }`;

  return {
    Html,
    Css,
  };
}

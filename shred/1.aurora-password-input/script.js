const dotCSSInfo = {
  width: 10,
  height: 10,
  unit: "px",
};

const inputTypePasswordCSSInfo = {
  width: 200,
  height: 100,
  unit: "px",
};

const caretCSSInfo = {};

function createOneAuroraDot() {
  const styles = `
    height: ${dotCSSInfo.height}${dotCSSInfo.unit};
    width: ${dotCSSInfo.width}${dotCSSInfo.unit};
    background-image: linear-gradient(to right, #00FF2F, #34EFC3,#94FFDA);
    clip-path: circle(30%);
  `;
  const dot = document.createElement("div");
  dot.style = styles;
  return dot;
}

function createCaret() {
  const caret = document.createElement("div");
  const caretStyles = `
    width:1px;
    height:10px;
    background-image: linear-gradient(to right, #00FF2F, #34EFC3,#94FFDA);
  `;

  caret.style = caretStyles;

  let increasingNumber = 530;

  setInterval(() => {
    caret.style = "";
  }, increasingNumber);

  setInterval(() => {
    caret.style = caretStyles;
  }, increasingNumber + increasingNumber);

  //   setInterval(() => {
  //     increasingNumber += 500;
  //   }, increasingNumber);

  return caret;
}
function handleCaretMove() {}

class AuroraPasswordInput extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({ mode: "open" });

    const dotsContainers = document.createElement("div");
    const dotsContainerStyles = `
        display:flex;
        padding:12px;
        position:absolute;
        top:2px;
        left:0;
        z-index: 10;
    `;
    dotsContainers.style = dotsContainerStyles;

    const inputTypePassword = document.createElement("input");
    const inputTypePasswordStyles = `
    width:${inputTypePasswordCSSInfo.width}${inputTypePasswordCSSInfo.unit};
    height:${inputTypePasswordCSSInfo.height}${inputTypePasswordCSSInfo.unit};
    position:relative;
    caret-color:linear-gradient(to right, #00FF2F, #34EFC3,#94FFDA);
    color:black;

    `;
    console.log("inputTypePasswordStyles: ", inputTypePasswordStyles);
    inputTypePassword.type = "password";
    inputTypePassword.style = inputTypePasswordStyles;

    let dotsWidth = 0;
    let isDotFull = false;

    inputTypePassword.oninput = (event) => {
      const inputTypePasswordWidth = inputTypePasswordCSSInfo.width;
      const inputTypePasswordHeight = inputTypePasswordCSSInfo.height;

      const dot = createOneAuroraDot();
      const dotWidth = dotCSSInfo.width;
      dotsWidth += dotWidth;
      if (dotsWidth > inputTypePasswordWidth) {
        isDotFull = true;
        dotsContainers.style =
          dotsContainerStyles + "\ntransform:translateX(1px)";
      }

      dotsContainers.style = dotsContainerStyles;

      console.log("dotsContainerStyles: ", dotsContainerStyles);
      console.log("isDotFull: ", isDotFull);

      if (dotsWidth < inputTypePasswordWidth) {
        dotsContainers.appendChild(dot);
      }
    };

    const caret = createCaret();

    console.log("isDotFull: ", isDotFull);
    shadow.appendChild(dotsContainers);
    shadow.appendChild(inputTypePassword);
    shadow.appendChild(caret);
  }
}

customElements.define("aurora-password-input", AuroraPasswordInput);

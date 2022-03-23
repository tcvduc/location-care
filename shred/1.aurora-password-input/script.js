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

class AuroraPasswordInput extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: "open" });
    this.shadow = shadow;
    this.manageAuroraPasswordInputShadowRootCSS();

    const shadowDotsContainer = document.createElement("div");
    shadowDotsContainer.classList.add("dotsContainer");
    const dotsContainer = document.createElement("div");

    const inputTypePassword = document.createElement("input");
    inputTypePassword.type = "password";
    inputTypePassword.classList.add("input_type_password");

    const caret = this.createCaret();
    shadow.appendChild(shadowDotsContainer);
    shadow.appendChild(inputTypePassword);
    shadow.appendChild(caret);

    this.handleOninputPassword(
      inputTypePassword,
      shadowDotsContainer,
      caret,
      dotsContainer
    );
  }

  manageAuroraPasswordInputShadowRootCSS = () => {
    let style = document.createElement("style");

    const auroraPasswordInputShadowRoot = document.getElementsByTagName(
      "aurora-password-input"
    )[0].shadowRoot;

    const styleTextContent = `
    .input_type_password{
      width:${inputTypePasswordCSSInfo.width}${inputTypePasswordCSSInfo.unit};
      height:${inputTypePasswordCSSInfo.height}${inputTypePasswordCSSInfo.unit};
      position:relative;
      color:transparent;
    }

    .caret{
      width:1px;
      height:10px;
      background-image: linear-gradient(to right, #00FF2F, #34EFC3,#94FFDA);
    }
    
    .dotsContainer{
      display:flex;
      padding:12px;
      position:absolute;
      top:2px;
      left:0;
      z-index: 10;
    }
    
    `;

    style.textContent = styleTextContent;

    this.shadow.appendChild(style);
  };

  /**
   *
   * @param {HTMLInputElement} inputTypePassword
   * @param {HTMLDivElement} shadowDotsContainer
   * @param {HTMLDivElement} caret
   * @param {HTMLDivElement} dotsContainer
   *
   */
  handleOninputPassword = (
    inputTypePassword,
    shadowDotsContainer,
    caret,
    dotsContainer
  ) => {
    let dotsWidth = 0;
    let isDotFull = false;

    let caretIndex = 0;
    shadowDotsContainer.appendChild(caret);

    inputTypePassword.oninput = (event) => {
      const inputTypePasswordWidth = inputTypePasswordCSSInfo.width;
      const inputTypePasswordHeight = inputTypePasswordCSSInfo.height;

      const dot = this.createOneAuroraDot();
      const elementInDotsContainers = shadowDotsContainer.children;
      const arrayFromElementInDotsContainers = Array.prototype.slice.call(
        elementInDotsContainers
      );

      console.log(
        "arrayFromElementInDotsContainers: ",
        arrayFromElementInDotsContainers
      );

      this.swap(arrayFromElementInDotsContainers, caretIndex, caretIndex + 1);

      for (let i = arrayFromElementInDotsContainers.length - 1; i >= 0; --i) {
        console.log(arrayFromElementInDotsContainers[i]);

        // dotsContainer.appendChild(arrayFromElementInDotsContainers[i]);
      }

      if (dotsWidth < inputTypePasswordWidth) {
        shadowDotsContainer.appendChild(dot);
      }
    };
  };

  createCaret = () => {
    const caret = document.createElement("div");

    let increasingNumber = 530;
    caret.classList.add("caret");

    setInterval(() => {
      caret.classList.remove("caret");
    }, increasingNumber);

    setInterval(() => {
      caret.classList.add("caret");
    }, increasingNumber + increasingNumber);

    return caret;
  };

  /**
   *
   * @param {HTMLCollection} a
   * @param {Number} i
   * @param {Number} j
   *
   */
  swap = (a, i, j) => {
    const temporary = a[i];
    a[i] = a[j];
    a[j] = temporary;
  };

  handleCaretMovePosition = () => {};

  createOneAuroraDot = () => {
    const styles = `
      height: ${dotCSSInfo.height}${dotCSSInfo.unit};
      width: ${dotCSSInfo.width}${dotCSSInfo.unit};
      background-image: linear-gradient(to right, #00FF2F, #34EFC3,#94FFDA);
      clip-path: circle(30%);
    `;
    const dot = document.createElement("div");
    dot.style = styles;
    return dot;
  };
}

customElements.define("aurora-password-input", AuroraPasswordInput);

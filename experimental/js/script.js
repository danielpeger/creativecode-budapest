let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

customElements.define(
  "cc-event",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("cc-event").content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true)
      );
    }
  }
);

customElements.define(
  "cc-speaker",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("cc-speaker").content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true)
      );
    }
  }
);

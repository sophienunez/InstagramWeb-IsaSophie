import * as components from "./components/indexcomponents.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `

     <profile-card></profile-card>

     <referencias-ig></referencias-ig>
     

     `;
  }
}
customElements.define("app-container", AppContainer);

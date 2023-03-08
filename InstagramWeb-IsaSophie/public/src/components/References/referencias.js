class ReferenciasIg extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href ="./src/components/References/references.css">
    <body>

    <div class="references">
      <h5>isa_salazar0910</h5>
      <h5>cambiar</h5>

      <h5>Sugerencias para ti</h5>

      <h5>tietght.store</h5>
      <h3>seguir</h3>

      <h3>datlgo_0 sigue a este usuario</h3>
      <h5>dantrazos sigue a este usuario</h5>
      <h5>cambiar</h5>

      <h3>sophie86</h3>
      <h5>jsalazar_31 y 6 más siguen esta cuenta</h5>
      <h5>cambiar</h5>

      <h5>tietght.store</h5>
      <h3>datlgo_0 sigue a este usuario</h3>
      <h5>cambiar</h5>

      <h5>dantrazos</h5>
      <h5>jsalazar_31 y 6 más siguen esta cuenta</h5>

    </div>

    
    </body>
    `;
  }
}

customElements.define("referencias-ig", ReferenciasIg);
export default ReferenciasIg;

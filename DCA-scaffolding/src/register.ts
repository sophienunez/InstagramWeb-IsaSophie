import "./components/export"
import "./screens/register"

class AppRegister extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-register', AppRegister);
export enum NavAttributes {
    "search_text" = "search_text"
}

export default class Nav extends HTMLElement {
    search_text: string = "";

    static get observedAttributes(){
        const attrs: Record <NavAttributes, null> = {
            search_text: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: NavAttributes,
        _: unknown,
        newValue: string
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            crear boton library
            `;
        }
    }
}

customElements.define("my-nav", Nav);
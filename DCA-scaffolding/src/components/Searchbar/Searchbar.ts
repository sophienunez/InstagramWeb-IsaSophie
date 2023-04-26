export enum SearchbarAttributes {
    "search_text" = "search_text"
}

export default class Searchbar extends HTMLElement {
    search_text?: string;

    static get observedAttributes(){
        const attrs: Record <SearchbarAttributes, null> = {
            search_text: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: SearchbarAttributes,
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
            
            `;
        }
    }
}

customElements.define("my-searchbar", Searchbar);
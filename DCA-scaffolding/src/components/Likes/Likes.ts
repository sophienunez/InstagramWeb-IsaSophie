export enum LikesAttributes {
    "card_img" = "card_img",
    "song_name" = "song_name",
    "artist_name" = "artist_name"
}

export default class Likes extends HTMLElement {
    card_img?: string;
    song_name?: string;
    artist_name?: string;

    static get observedAttributes(){
        const attrs: Record <LikesAttributes, null> = {
            card_img: null,
            song_name: null,
            artist_name: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: LikesAttributes,
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

customElements.define("my-likes", Likes);
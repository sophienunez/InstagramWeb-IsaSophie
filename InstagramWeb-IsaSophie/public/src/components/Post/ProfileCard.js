class ProfileCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `

    <link rel="stylesheet" href="./src/components/Post/post.css">

    <body>
    
  <div class = "general"> 

      <div class = "top-ig" >
      <img class="profile-img"src="isa.jpg" height = "712px" width = "470px">
      <h5 class="username">isa_salazar0910</h5>
      <img class="botton-more" src="more.png"  height = "29.99px" width = "29.99px">

      </div>
       
      <div class = "img-ig"> 
    
      <img src="PICBN.jpg" height = "712px" width = "470px">
      </div>
  
<div class= "description">


  <div class= "buttons">
    <img  src="like.png"  height = "24.99" width = "24.99">
    <img  src="comment.png"  height = "24.99" width = "24.99">
    <img  src="send.png"  height = "24.99" width = "24.99">
    <img  src="save.png"  height = "24.99" width = "24.99">

  </div>

  <div class = "datas" >
    <h5 class="name">isa_salazar 0910 </h5>
    <h5>El mejor día de mi vida</h5>
    <h5 class="name">Ver los 20 comentarios</h5>
  </div>


</div>

   

</body>

    `;
  }
}

customElements.define("profile-card", ProfileCard);
export default ProfileCard;

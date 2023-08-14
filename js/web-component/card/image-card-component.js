import AbstractCardComponent from "./abstract-card-component.js";
class ImageCardComponent extends AbstractCardComponent{
    constructor(size){
        super(size);
    }
    setImageFunction(imageFunction){
        this.imageFunction = imageFunction;
    }
    setContentFunction(contentFunction){
        this.contentFunction = contentFunction;
    }
    _setCardContent(){
        let contentElement = document.createElement("div");
        let cardContainer = this.querySelector(".card");
        contentElement.className = "card-content";
        this.contentFunction(contentElement);
        cardContainer.appendChild(contentElement);
    }
    _setImage(){
        let cardImageElement = document.createElement("div");
        let cardParentElement = this.querySelector(".card");
        cardImageElement.className = "card-image";
        this.imageFunction(cardImageElement);
        cardParentElement.appendChild(cardImageElement);
    }
    render(){
        super.render();
        this._setImage();
        this._setCardContent();
    }
}
customElements.define("imagecard-component", ImageCardComponent);
export default ImageCardComponent;
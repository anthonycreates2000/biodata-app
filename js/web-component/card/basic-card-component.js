import AbstractCardComponent from "./abstract-card-component.js";
class BasicCardComponent extends AbstractCardComponent{
    constructor(size){
        super(size);
    }
    setContentFunction(contentFunction){
        this.contentFunction = contentFunction;
    }
    _setCardContent(){
        let cardContainer = this.querySelector(".card");
        let contentElement = document.createElement("div");
        contentElement.className = "card-content";
        this.contentFunction(contentElement);
        cardContainer.appendChild(contentElement);
    }
    render(){
        super.render();
        this._setCardContent();
    }
}
customElements.define("basiccard-component", BasicCardComponent);
export default BasicCardComponent;
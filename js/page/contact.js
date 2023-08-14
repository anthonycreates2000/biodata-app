import ImageCaptionClass from "../classes/image-caption-class.js";
import SizeClass from "../classes/size-class.js";
import GridComponent from "../web-component/grid-component.js";
import BasicCardComponent from "../web-component/card/basic-card-component.js";

class ContactPage extends HTMLElement{
    constructor(){
        super();
        this.gridComponent = "";
        this.contactCardComponent = "";
    }
    setContactElement(){
        let gridSize = [new SizeClass(12, 6, 4),
                        new SizeClass(12, 6, 4),
                        new SizeClass(12, 12, 4)];
        let imagePath = "../../image/contact/";
        let contactElements = [new ImageCaptionClass(`${imagePath}instagram.jpg`, "Instagram: a_kev_o"),
                              new ImageCaptionClass(`${imagePath}line.jpg`, "LINE: anthony-max"),
                              new ImageCaptionClass(`${imagePath}gmail.png`, "Gmail: programist851@gmail.com")];
        this.gridComponent = new GridComponent("contact-container", contactElements, gridSize);
        this.gridComponent.setElementFunction((datum, columnElement) => {
            columnElement.innerHTML = `
                <div class = "circle-container">
                    <div class = "centerize-container">
                        <img src = "${datum.imageName}">
                        <p>${datum.name}</p>
                    </div>
                </div>
            `;
        });
        this.gridComponent.render();
        this.appendChild(this.gridComponent);
    }
    setHeadingElement(){
        let contactCardSize = new SizeClass(12, 12, 12);
        this.contactCardComponent = new BasicCardComponent(contactCardSize);
        this.contactCardComponent.setContentFunction((containerElement) => {
            let leftElement = document.createElement("div");
            leftElement.id = "left-container";
            leftElement.innerHTML = `
                <h1>My Contacts</h1>
                <p>If you'd like to have a chat, feel free to chat me from one of these following social medias:</p>
            `;
            let rightElement = document.createElement("div");
            rightElement.id = "right-container";
            rightElement.innerHTML = `
                <i class = "material-icons" id = "contact-icon">contacts</i>  
            `;
            let sizeElements = [new SizeClass(12, 6, 6),
                                new SizeClass(12, 6, 6)];
            let elements = [leftElement, rightElement];
            let gridComponent = new GridComponent("heading-container", elements, sizeElements);
            gridComponent.setElementFunction((datum, contentElement) => {
                contentElement.appendChild(datum);
            });
            gridComponent.render();
            containerElement.appendChild(gridComponent);
        });
        this.contactCardComponent.render();
        this.appendChild(this.contactCardComponent);
    }
    connectedCallback(){
        this.setHeadingElement();
        this.setContactElement();
    }
}
customElements.define("contact-page", ContactPage);
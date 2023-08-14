import GridComponent from "../web-component/grid-component.js";
import SizeClass from "../classes/size-class.js";
import ImageCardContainer from "../web-component/card/image-card-component.js";
import ImageDescriptionClass from "../classes/image-description-class.js";
class Render3DPortfolioProject extends HTMLElement{
    constructor(){
        super();
        this.gridComponent = "";
        this.imagesGridComponent = "";
    }
    setHeadingGridComponent(){
        let headingGridSize = [new SizeClass(12, 6, 7),
                               new SizeClass(12, 6, 5)];
        let textElementContainer = document.createElement("div");
        textElementContainer.id = "text-container";
        textElementContainer.innerHTML = `
            <h1>My 3D Rendered Projects</h1>
            <p>All of these images are rendered with 3ds max.
            Since this is my first post, there's not much to see here.
            However, I will keep updating my library as the time progresses</p>
        `;
        let imageContainer = document.createElement("div");
        imageContainer.id = "icon-container"
        imageContainer.innerHTML = `
            <i class = "material-icons">perm_media</i>
        `;
        let elementsData = [textElementContainer, imageContainer];
        this.headingGridComponent = new GridComponent("heading-container", elementsData, headingGridSize);
        this.headingGridComponent.setElementFunction((datum, columnElement) => {
            columnElement.appendChild(datum);
        });
        this.headingGridComponent.render();
        this.appendChild(this.headingGridComponent);
    }
    setImagesGridComponent(){
        let imageElementSizes = [new SizeClass(12, 6, 4),
                                 new SizeClass(12, 6, 4),
                                 new SizeClass(12, 6, 4),
                                 new SizeClass(12, 6, 6),
                                 new SizeClass(12, 12, 6)];
        let imageCardContainerSize = new SizeClass(12, 12, 12);
        let imageDirectory = "../../image/3D-portfolio-projects/";
        let imageCaptionData = [new ImageDescriptionClass(`${imageDirectory}android-and-pacman.jpg`,
                                "Android and Pacman",
                                "An android that behaves like pac-man!"),
                                new ImageDescriptionClass(`${imageDirectory}flour-sack.jpg`,
                                "Flour Sack",
                                "A flour sack that is ready to take any challenges!"),
                                new ImageDescriptionClass(`${imageDirectory}interior-modified.jpg`,
                                "My First Interior Project",
                                "My very first beginner project of interior design of a home!"),
                                new ImageDescriptionClass(`${imageDirectory}robot-dan-hujan.jpg`,
                                "Robot dan Hujan",
                                "A very simple robot that is enjoying rain very much just as I do!"),
                                new ImageDescriptionClass(`${imageDirectory}exterior.jpg`,
                                "My First Exterior Project",
                                "My very first beginner project of exterior design of a home!")];
        
        this.imagesGridComponent = new GridComponent("images-container", imageCaptionData, imageElementSizes);
        this.imagesGridComponent.setElementFunction((datum, containerElement) => {
            let imageCardContainer = new ImageCardContainer(imageCardContainerSize);
            imageCardContainer.setImageFunction((cardImageElement) => {
                cardImageElement.innerHTML = `
                    <div class = "content-container">
                        <img src = "${datum.imagePath}">
                        <span class = "card-title">${datum.name}</span>
                    </div>
                `;
            });
            imageCardContainer.setContentFunction((contentElement) => {
                contentElement.innerHTML = `<p>${datum.description}</p>`;
            });
            imageCardContainer.render();
            containerElement.appendChild(imageCardContainer);
        })
        this.imagesGridComponent.render();
        this.appendChild(this.imagesGridComponent);
    }
    connectedCallback(){
        this.setHeadingGridComponent();
        this.setImagesGridComponent();
    }
}
customElements.define("render_3d_portfolio_project-page", Render3DPortfolioProject);
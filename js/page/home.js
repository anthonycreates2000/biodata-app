import ImageDescriptionClass from "../classes/image-description-class.js";
import GridComponent from "../web-component/grid-component.js";
import SizeClass from "../classes/size-class.js";
import MyXMLHttpRequest from "../xml-http-request.js";
class HomePage extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div id = "profile-image-container">
            <img src="image/profile-picture.jpg">
        </div>
        <div id = "first-big-container">
            <h1 id = "big-letter">HELLO WORLD!</h1>
        </div>
        <div id = "second-big-container">
            <h2 id = "second-big-letter">Welcome to my amazing profile page!</h2>
        </div>
        <h2 id = "padded">I'm very pleased that you have come to my website</h2>
        <div id = "powered-container">
            <h1>Did you know?</h1>
            <p>This website is powered by...</p>
        </div>
        <div id = "start-explore">
            <h1>Start Exploring about me right now!</h1>
            <a id = "linkAbout" class = "waves-effect waves-light btn">Let's Know Each Other!</a>
        </div>
        `;
        this.querySelector("#linkAbout").addEventListener("click", () => {
            let xhttp = new MyXMLHttpRequest();
            xhttp.setPage("about");
            xhttp.successCommand = (responseText) => {
                let content = document.querySelector("#content");
                content.innerHTML = responseText;
                window.scrollTo(0, 0);
            };
            xhttp.sendRequest();
        });

        let poweredContainer = this.querySelector("#powered-container");
        let descriptionData = [new ImageDescriptionClass("../../image/web-components.jpg", "Web Component", "Web Components are a set of features that provide a standard component model for the Web allowing for encapsulation and interoperability of individual HTML elements."),
                               new ImageDescriptionClass("../../image/xhr.jpg", "AJAX", "The XMLHttpRequest Standard defines an API that provides scripted client functionality for transferring data between a client and a server."),
                               new ImageDescriptionClass("../../image/service-worker.png", "Service Worker", "A service worker is a script that can harness the power to load the webpage, even when there's no internet connection, so we can take our apps anywhere!")];
        let sizes = [new SizeClass(12, 6, 4),
                     new SizeClass(12, 6, 4),
                     new SizeClass(12, 12, 4)];
        let gridComponent = new GridComponent("features", descriptionData, sizes);
        gridComponent.setElementFunction((datum, columnElement) => {
            columnElement.innerHTML += `
            <div id = "content-container">
                <img src = "${datum.imagePath}">
                <h1>${datum.name}</h1>
                <p>${datum.description}</p>
            </div>
            `;
        });
        gridComponent.render();
        poweredContainer.appendChild(gridComponent);
    }
}
customElements.define("home-page", HomePage);
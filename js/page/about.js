import BasicCardComponent from "../web-component/card/basic-card-component.js";
import BasiCardComponent from "../web-component/card/basic-card-component.js";
import SizeClass from "../classes/size-class.js";
import GridComponent from "../web-component/grid-component.js";
import ImageCaptionClass from "../classes/image-caption-class.js";

class AboutPage extends HTMLElement{
    constructor(){
        super();
        this.gridComponent = "";
    }
    setIntroComponent(){
        let size = new SizeClass(12, 12, 12);
        let introCardElement = new BasiCardComponent(size);
        introCardElement.setContentFunction((contentElement) => {
            contentElement.innerHTML = `
                <div class = "heading">
                    <i class = "material-icons">account_box</i>
                    <h1 class = "card-title">User Profile</h1>
                </div>
                <ul class = "padded">
                    <li><p><strong>Name:</strong> Anthony Kevin Oktavius</p></li>
                    <li><p><strong>Nickname:</strong> Anthony</p></li>
                    <li><p><strong>Date of Birth:</strong> 11 October 2000</p></li>
                    <li><p><strong>Age:</strong> 20</p></li>
                    <li><p><strong>Email:</strong> programist851@gmail.com</p></li>
                </ul>
        `;
        })
        introCardElement.render();
        return introCardElement;
    }
    setEducationComponent(){
        let size = new SizeClass(12, 12, 12);
        let educationCardElement = new BasicCardComponent(size);
        educationCardElement.setContentFunction((contentElement) => {
            contentElement.innerHTML = `
                <div class = "heading">
                    <i class = "material-icons">school</i>
                    <h1 class = "card-title">Education</h1>
                </div>
                <ul class = "padded">
                    <li><p>Grade 1 - Grade 3: Marie Joseph</p></li>
                    <li><p>Grade 4 - Grade 12: Mahatma Gading School</p></li>
                    <li><p>Current Education (S1): Bina Nusantara University (Binus University)</p></li>
                </ul>
            `;
        });
        educationCardElement.render();
        return educationCardElement;
    }
    setSkillsComponent(){
        let skillsCardSize = new SizeClass(12, 12, 12);
        let skillsCardElement = new BasicCardComponent(skillsCardSize);
       
        skillsCardElement.setContentFunction((contentElement) => {
            contentElement.innerHTML = `
                <div class = "heading">
                    <i class = "material-icons">check_circle_outline</i>
                    <h1 class = "card-title">Tech Skills</h1>
                </div>
            `;
            let imagePath = "../../image/tech-skills/";
            let imageCaptionClass = [new ImageCaptionClass(`${imagePath}machine-learning.jpg` , "Machine Learning"),
                                     new ImageCaptionClass(`${imagePath}website-development.jpg` , "Web Development"),
                                     new ImageCaptionClass(`${imagePath}android.jpg` , "Android"),
                                     new ImageCaptionClass(`${imagePath}unity.jpg` , "Unity Game Development"),
                                     new ImageCaptionClass(`${imagePath}3D-modelling.jpg`, "Beginner 3D Modeller and Animator")];
            let imageGridSizes = [new SizeClass(12, 6, 6),
                                  new SizeClass(12, 6, 6),
                                  new SizeClass(12, 6, 6),
                                  new SizeClass(12, 6, 6),
                                  new SizeClass(12, 6, 6),
                                  new SizeClass(12, 6, 6)];
            let gridElement = new GridComponent("tech-skills", imageCaptionClass, imageGridSizes);
            gridElement.setElementFunction((datum, columnElement) => {
                columnElement.innerHTML += `
                    <div class = "image-caption-container padded">
                        <img src = "${datum.imageName}">
                        <p>${datum.name}</p>
                    </div>
                `;
            });
            gridElement.render();
            contentElement.appendChild(gridElement);
        });
        skillsCardElement.render();
        return skillsCardElement;
    }
    setDescriptionComponent(){
        let descriptionCardSize = new SizeClass(12, 12, 12);
        let descriptionCardElement = new BasiCardComponent(descriptionCardSize);
        descriptionCardElement.setContentFunction((contentElement) => {
            contentElement.innerHTML = `
                <div class = "heading">
                    <i class = "material-icons">chat</i>
                    <h1 class = "card-title">Foreword</h1>
                </div>
                <div id = "greeting-emphasize">
                    <i class = "material-icons">insert_emoticon</i>
                    <h1>Greetings!</h1>
                </div>
                <p class = "centerize padded">My name is Anthony Kevin Oktavius and my surname is Anthony. I'm 20 years old now and
                currently I'm studying at Binus. I'm an ambitious person who loves to learn something new, especially
                in programming. I'm also an open-minded person who always receive helpful suggestions from the
                people around me. One more thing which is important is to be optimistic so I believe that even
                though the problems in front of me are challenging, I'm always positive that there are many solutions
                to face them.</p>
            `;
        });
        descriptionCardElement.render();
        return descriptionCardElement;
    }
    connectedCallback(){
        this.innerHTML = `
            <article id = "welcome-background">
                <div id = "welcome-container">
                    <h1 id = "welcome-text">About Me</h1>
                </div>
            </article>
        `;
        let sizes = [new SizeClass(12, 12, 6),
                     new SizeClass(12, 12, 6),
                     new SizeClass(12, 12, 12),
                     new SizeClass(12, 12, 12),
                     new SizeClass(12, 12, 12)];
        let components = [this.setIntroComponent(), this.setEducationComponent(), this.setDescriptionComponent(), this.setSkillsComponent()];
        
        this.gridComponent = new GridComponent("grid-container", components, sizes);
        this.gridComponent.setElementFunction((datum, columnElement) => {
            columnElement.appendChild(datum);
        });
        this.gridComponent.render();
        this.appendChild(this.gridComponent);
    }
}
customElements.define("about-page", AboutPage);
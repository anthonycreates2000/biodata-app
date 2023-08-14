class AbstractCardComponent extends HTMLElement{
    constructor(size){
        super();
        this.size = size;
    }
    getSizeInnerHTML(){
        return `col l${this.size.largeSize} m${this.size.mediumSize} s${this.size.smallSize}`;
    }
    render(){
        this.innerHTML = `
            <div class = "row">
                <div class = "${this.getSizeInnerHTML()}">
                    <div class = "card">
                    </div>
                </div>
            </div>
        `;
    }
}
export default AbstractCardComponent;
class GridComponent extends HTMLElement{
    constructor(idName, data, sizes){
        super();
        this.data = data;
        this.idName = idName;
        this.sizes = sizes;
        this.elementFunction = () => {};
    }
    setElementFunction(elementFunction){
        this.elementFunction = elementFunction;
    }
    _renderElements(datum, columnElement){
        this.elementFunction(datum, columnElement);
    }
    render(){
        this.innerHTML = `<div class = "row" id = "${this.idName}"></div>`;
        let row = this.querySelector(`#${this.idName}`);
        
        this.data.forEach((datum, index) => {
            let columnClassName = `col l${this.sizes[index].largeSize} m${this.sizes[index].mediumSize} s${this.sizes[index].smallSize}`;
            let columnElement = document.createElement("div");
            columnElement.className = columnClassName;
            this._renderElements(datum, columnElement);
            row.appendChild(columnElement);
        });
        this.appendChild(row);
    }
}
customElements.define("grid-component", GridComponent);
export default GridComponent;
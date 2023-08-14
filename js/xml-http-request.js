class MyXMLHttpRequest{
    constructor(){
        this.successCommand = () => {};
        this.failedCommand = () => {};
        this.page = "";
        this.xhttp = new XMLHttpRequest();
    }
    setPage(page){
        let loweredCasePage = page.toLowerCase();
        this.page = `../pages/${loweredCasePage}.html`;
    }
    isReady() { 
        return this.xhttp.readyState === 4 && this.xhttp.status === 200; 
    }
    sendRequest(){
        this.xhttp.onreadystatechange = () => {
            if (this.isReady()){
                this.successCommand(this.xhttp.responseText);
            }
            else{
                this.failedCommand(this.xhttp.responseText);
            }
        }
        this.xhttp.open("GET", this.page, true);
        this.xhttp.send();
    }
}
export default MyXMLHttpRequest;
import MyXMLHttpRequest from "./xml-http-request.js";
function loadNav(page){
    let navElements = document.querySelectorAll(".sidenav");
    M.Sidenav.init(navElements);
    let xmlHttpRequest = new MyXMLHttpRequest();
    xmlHttpRequest.setPage("nav");
    xmlHttpRequest.successCommand = (responseText) => {
        document.querySelectorAll(".topnav, .sidenav").forEach((element) =>{
            element.innerHTML = responseText;
        });
        document.querySelectorAll(".sidenav a, .topnav a").forEach((element) => {
            element.addEventListener("click", (event) => {
                let sidenav = document.querySelector(".sidenav");
                M.Sidenav.getInstance(sidenav).close();
                page = event.target.getAttribute("href").substr(1);
                loadPage(page);
            });
        });
    }
    xmlHttpRequest.sendRequest();
}
function loadPage(page){
    let xmlHttpRequest = new MyXMLHttpRequest();
    xmlHttpRequest.setPage(page);
    xmlHttpRequest.successCommand = (responseText) => {
        let content = document.querySelector("#content");
        content.innerHTML = responseText;
    }
    xmlHttpRequest.failedCommand = () => {
        let errorContent = `
        <div id = "error-code">
            <i class = "material-icons">error</i>
            <h1>Error: Page not Found</h1>
            <p id = "error">It looks like the page is not found. Try again!</p>
        </p>`;
        content.innerHTML = errorContent;
    }
    xmlHttpRequest.sendRequest();
}
document.addEventListener("DOMContentLoaded", () => {
    let page = window.location.hash.substring(1);
    if (page === "") page = "home";
    loadNav(page);
    loadPage(page);     
});
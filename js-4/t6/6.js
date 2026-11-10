const buttonElement = document.querySelector("button");
function showMessage() {
    alert("Button Clicked");
}
buttonElement.addEventListener("click", showMessage);
const triggerElement = document.getElementById("trigger");
const imageElement = document.getElementById("target");
function handleMouseOver() {
    imageElement.src = "img/picB.jpg";
}
function handleMouseOut() {
    imageElement.src = "img/picA.jpg";
}
triggerElement.addEventListener("mouseover", handleMouseOver);
triggerElement.addEventListener("mouseout", handleMouseOut);
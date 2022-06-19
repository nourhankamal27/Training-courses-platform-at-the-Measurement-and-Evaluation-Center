openMenue = document.getElementById("open-nav");
closeMenue = document.getElementById("close-nav");
menue = document.querySelector(".nav-links");
openMenue.addEventListener("click", () => {
    menue.classList.add("clopssing");
    openMenue.style.cssText = "opacity:0;";
});
document.addEventListener("click", (element) => {
    if (
        element.target.id !== "open-nav" &&
        !element.target.classList.contains("nav-links") &&
        element.target.parentElement.id !== "open-nav"
    ) {
        menue.classList.remove("clopssing");
        openMenue.style.cssText = "opacity:1;";
    }
});

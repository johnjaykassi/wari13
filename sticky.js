window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("sticky");
        header.style.backgroundColor="red";
        header.style.width = "100%";
        header.style.height = "50px"
    } else {
        header.classList.remove("sticky");
        header.style.backgroundColor="orange";
        header.style.removeProperty("height")
    }
});
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("sticky");
        header.style.backgroundColor="red";
        header.style.width = "100%";
        header.style.height = "70px"
    } else {
        header.classList.remove("sticky");
        header.style.backgroundColor="#4d9fec";
        header.style.removeProperty("height")
    }
});

const services = document.querySelector("services-div");

window.addEventListener("scroll", function(){

    services.animate()
})

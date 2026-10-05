let nav = document.getElementById("nav-responsive");
let navBtn = document.getElementById("nav-hamburger");

navBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 1075){
        nav.classList.remove("open");
    }
})

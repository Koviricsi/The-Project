let nav = document.getElementById("nav-responsive");
let navBtn = document.getElementById("nav-hamburger");

navBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    navBtn.classList.toggle("open");
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 900){
        nav.classList.remove("open");
        navBtn.classList.remove("open");
    }
})

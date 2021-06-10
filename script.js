const links = document.querySelectorAll(".nav-item")
const sidebarToggler = document.querySelector(".sidebar-toggler");
const sidebar = document.querySelector("aside");
const navbar = document.querySelector("nav");
const brand = document.querySelector(".nav-brand");
const overlay = document.querySelector(".overlay")

sidebarToggler.addEventListener("click", function () {
    sidebarToggler.classList.toggle("open");
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show")
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("show")
    sidebarToggler.classList.remove("open");
    sidebar.classList.remove("open");
})


window.onscroll = () => {floatingNav()}

const floatingNav = () => {
    // if body or root node
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        navbar.classList.add("float")
        brand.classList.add("float")
    }
    else {
        navbar.classList.remove("float")
        brand.classList.remove("float")
    }
}

links.forEach(link => {
    link.addEventListener("click", () => {
        link.classList.add("active")
        links.forEach(other => {
            if (other !== link) {
                other.classList.remove("active")
            }
        })
    })
})

(function() {
    var links = document.querySelectorAll(".nav-item")
    var header = document.querySelector("header")
    var sidebarToggler = document.querySelector(".sidebar-toggler");
    var overlay = document.querySelector(".overlay")

    sidebarToggler.addEventListener("click", function () {
        overlay.classList.toggle("show")
        header.classList.toggle("sidebar")
    });
    
    overlay.addEventListener("click", () => {
        overlay.classList.remove("show")
        header.classList.remove("sidebar")
    })
    
    floatingNav = function() {
        // if body or root node
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            header.classList.add("float")
        }
        else {
            header.classList.remove("float")
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
})();

window.onscroll = () => {floatingNav()}

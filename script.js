const links = document.querySelectorAll(".nav-item")
const openSidebarBtn = document.querySelector(".sidebar-open");
const closeSidebarBtn = document.querySelector(".sidebar-close");
const sidebar = document.querySelector("aside");

openSidebarBtn.addEventListener("click", function () {
    sidebar.classList.add("open");
});

closeSidebarBtn.addEventListener("click", function () {
    sidebar.classList.remove("open");
});



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
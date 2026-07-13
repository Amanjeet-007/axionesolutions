const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("menuOverlay");

function openMenu() {
    if (!sidebar.classList.contains("show")) {
        menuBtn.style.rotate = "-90deg";
        sidebar.classList.add("show");
        overlay.classList.add("show");
        document.body.style.overflow = "hidden";
    } else {
        menuBtn.style.rotate = "0deg";
        sidebar.classList.remove("show");
        overlay.classList.remove("show");
        document.body.style.overflow = "";
    }
}

menuBtn.addEventListener("click", openMenu);
overlay.addEventListener("click", openMenu);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (sidebar.classList.contains("show")) {
            openMenu();
        }
    }
});

const navLinks = document.querySelectorAll(".mobile-nav a");

const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("active");
    }
});

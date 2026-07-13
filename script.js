const menuBtn = document.querySelector(".menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")
let isOpen = false;

menuBtn.addEventListener("click", () => {
    if (!isOpen) {
        menuBtn.style.rotate = "-90deg";
        mobileMenu.style.display = "flex";
        mobileMenu.style.opacity = "1";
        isOpen = true
    }else{
        menuBtn.style.rotate = "0deg";
        mobileMenu.style.display = "none";
        mobileMenu.style.opacity = "0";
        isOpen = false
    }


})
function mobileMenu() {
    const mobileMenu = document.querySelector(".header__burger-menu"); // TODO: Find the element with ...
    const openImage = document.querySelector(".header__open-img"); // TODO: Find the element with ...
    const body = document.querySelector("body");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        openImage.setAttribute("src", "../img/header/OpenMenuButton.svg");
        body.style.overflowY = "auto";
    } else {
        mobileMenu.style.display = "block";
        openImage.setAttribute("src", "../img/header/CloseMenuButton.svg");
        body.style.overflowY = "hidden";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    animateElements();
});

function animateElements() {
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
        observer.observe(elm);
    }
}

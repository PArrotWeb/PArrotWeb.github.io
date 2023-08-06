document.addEventListener('DOMContentLoaded', function() {
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
    let options = { threshold: [0.4] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
        observer.observe(elm);
    }
}

function openMobileMenu() {
    const mobileMenu = document.getElementById(""); // TODO: Find the element with ...
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        // TODO: Change image to hamburger icon
    } else {
        mobileMenu.style.display = "block";
        // TODO: Change image to close icon
    }
}


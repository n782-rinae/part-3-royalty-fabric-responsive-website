document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (event) {

            const name = document.querySelector("input[type='text']");
            const email = document.querySelector("input[type='email']");
            const message = document.querySelector("textarea");

            let errors = [];

            if (name.value.trim() === "") {
                errors.push("Name is required");
            }

            if (email.value.trim() === "") {
                errors.push("Email is required");
            } else if (!email.value.includes("@")) {
                errors.push("Enter a valid email");
            }

            if (message.value.trim() === "") {
                errors.push("Message is required");
            }

            if (errors.length > 0) {
                event.preventDefault();
                alert(errors.join("\n"));
            } else {
                alert("Thank you! Your enquiry has been submitted.");
            }

        });

    }

});
// ===============================
// SCROLL ANIMATION (PART 3)
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const animatedElements = document.querySelectorAll(
        ".card, .product-card, .trust-card, .price-card"
    );

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        animatedElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);

    // run once on load
    revealOnScroll();

});
// ===============================
// HAMBURGER MENU TOGGLE
// ===============================

function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
}
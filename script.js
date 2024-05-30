// Script para el modo oscuro
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    let cards = document.querySelectorAll('.card, .card-work, .colorful-form');
    cards.forEach(function(card) {
        card.classList.toggle('dark-mode');
    });

    let links = document.querySelectorAll('.scroll-link');
    links.forEach(function(link) {
        link.classList.toggle('dark-mode');
    });

    let inputs = document.querySelectorAll('.form-input');
    inputs.forEach(function(input) {
        input.classList.toggle('dark-mode');
    });

    let textareas = document.querySelectorAll('textarea.form-input');
    textareas.forEach(function(textarea) {
        textarea.classList.toggle('dark-mode');
    });

    let buttons = document.querySelectorAll('.form-button');
    buttons.forEach(function(button) {
        button.classList.toggle('dark-mode');
    });

    let redes = document.querySelector('.redes');
    redes.classList.toggle('dark-mode');
});

// Script para el scroll
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".scroll-link");

    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetID = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});

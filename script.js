// Infinity Frame

console.log("Infinity Frame Loaded Successfully");

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});// Typing Animation

const text = [
    "Front-End Web Developer",
    "Digital Creator",
    "Founder of Infinity Frame",
    "Freelancer"
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type() {

    if (charIndex < text[textIndex].length) {

        typing.textContent += text[textIndex].charAt(charIndex);
        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }

}

function erase() {

    if (charIndex > 0) {

        typing.textContent = text[textIndex].substring(0, charIndex - 1);
        charIndex--;

        setTimeout(erase, 50);

    } else {

        textIndex++;

        if (textIndex >= text.length) {
            textIndex = 0;
        }

        setTimeout(type, 300);

    }

}

type();
// Variables
let company = "Infinity Frame";
const year = 2026;
let services = "Video Editing";

// Output
console.log(company);
console.log(year);
console.log(services);

// Function
function welcome() {
    alert("Welcome to Infinity Frame!");
}

// Call Function
welcome(); const hireBtn = document.querySelector(".btn");

hireBtn.addEventListener("click", function () {
    alert("Thank you for contacting Infinity Frame! We will contact you soon.");
}); const heading = document.querySelector(".hero h1");

heading.style.color = "#FFD700";
heading.style.fontSize = "60px"; heading.addEventListener("click", function () {
    alert("Welcome to Infinity Frame!");
}); const button = document.querySelector(".btn");

button.addEventListener("click", function (e) {
    e.preventDefault();

    button.style.background = "#00ff99";
    button.style.color = "#000";
    button.innerText = "Thanks!";
}); <button id="themeBtn">🌙 Dark Mode</button>#themeBtn{
    padding: 10px 20px;
    border: none;
    border - radius: 8px;
    cursor: pointer;
    background: #FFD700;
    color:#000;
    font - weight: bold;
}

.light - mode{
    background: #ffffff;
    color:#000000;
}

.light - mode section{
    background: #f5f5f5;
}

.light - mode footer{
    background: #dddddd;
    color:#000;
} const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerText = "🌙 Dark Mode";
    } else {
        themeBtn.innerText = "☀️ Light Mode";
    }
}); <div class="menu-toggle">☰</div>.menu - toggle{
    display: none;
    font - size: 30px;
    color: #FFD700;
    cursor: pointer;
}

@media(max - width: 768px) {

.menu - toggle{
        display: block;
    }

nav ul{
        display: none;
        flex - direction: column;
        background:#000;
        position: absolute;
        top: 70px;
        right: 20px;
        width: 200px;
        padding: 20px;
    }

nav ul.active{
        display: flex;
    }

} const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
}); <h3 id="sliderText">Creative Digital Solutions</h3>const texts = [
    "Creative Digital Solutions",
    "Professional Video Editing",
    "Graphic Design Services",
    "Language Translation"
];

let index = 0;

const sliderText = document.getElementById("sliderText");

setInterval(function () {
    index++;

    if (index >= texts.length) {
        index = 0;
    }

    sliderText.innerText = texts[index];
}, 2000); <form id="contactForm">

    <input type="text" id="name" placeholder="Your Name" required>

        <input type="email" id="email" placeholder="Your Email" required>

            <textarea id="message" placeholder="Your Message"></textarea>

            <button type="submit" class="btn">Send Message</button>

        </form>const form = document.getElementById("contactForm");

        form.addEventListener("submit", function(event){

            event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if(name === "" || email === ""){
            alert("Please fill all required fields.");
}else{
            alert("Message Sent Successfully!");
}

});#contactForm{
            display:flex;
        flex-direction:column;
        gap:15px;
}

        #contactForm input,
        #contactForm textarea{
            padding:15px;
        border-radius:8px;
        border:none;
        font-size:16px;
}

        #contactForm textarea{
            height:120px;
        resize:none;
}<div class="filter-buttons">
            <button onclick="filterProjects('all')">All</button>
            <button onclick="filterProjects('video')">Video</button>
            <button onclick="filterProjects('design')">Design</button>
            <button onclick="filterProjects('translation')">Translation</button>
        </div><div class="project video"><div class="project design"><div class="project translation">.filter-buttons{
            text - align:center;
            margin-bottom:30px;
}

            .filter-buttons button{
                padding:10px 20px;
            margin:5px;
            cursor:pointer;
            border:none;
            border-radius:8px;
            background:#FFD700;
            font-weight:bold;
}

            .project{
                display:block;
}function filterProjects(category){

    const projects = document.querySelectorAll(".project");

            projects.forEach(function(project){

        if(category === "all"){
                project.style.display = "block";
        }
            else if(project.classList.contains(category)){
                project.style.display = "block";
        }
            else{
                project.style.display = "none";
        }

    });

}.hidden{
                opacity:0;
            transform:translateY(50px);
            transition:all 0.8s ease;
}

            .show{
                opacity:1;
            transform:translateY(0);
}<div class="card"></div><div class="card hidden"><div class="project hidden"><div class="box hidden">const hiddenElements = document.querySelectorAll(".hidden");

                window.addEventListener("scroll", function () {

                    hiddenElements.forEach(function (element) {

                        const position = element.getBoundingClientRect().top;

                        if (position < window.innerHeight - 100) {
                            element.classList.add("show");
                        }

                    });

});<form id="contactForm">

                    <input type="text" id="name" placeholder="Your Name">

                        <input type="email" id="email" placeholder="Your Email">

                            <textarea id="message" placeholder="Your Message"></textarea>

                            <button type="submit" class="btn">Send Message</button>

                        </form>#contactForm{
                            display:flex;
                        flex-direction:column;
                        gap:15px;
                        max-width:500px;
                        margin:auto;
}

                        #contactForm input,
                        #contactForm textarea{
                            padding:15px;
                        border-radius:10px;
                        border:1px solid #ccc;
                        font-size:16px;
}

                        #contactForm button{
                            cursor:pointer;
}const contactForm = document.getElementById("contactForm");

                        contactForm.addEventListener("submit", function(e){

                            e.preventDefault();

                        const name = document.getElementById("name").value.trim();
                        const email = document.getElementById("email").value.trim();
                        const message = document.getElementById("message").value.trim();

                        if(name === "" || email === "" || message === ""){
                            alert("Please fill in all fields.");
                        return;
    }

                        if(!email.includes("@")){
                            alert("Please enter a valid email address.");
                        return;
    }

                        alert("✅ Message Sent Successfully!");

                        contactForm.reset();

});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            link.classList.add('active');

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const offset = 4 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Convert 5rem to pixels

            const targetPosition = targetElement.offsetTop - navbarHeight + offset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

            // For mobile, close the navigation menu after clicking a link
            const navToggle = document.querySelector('.menu-toggle');
            const navLinksWrapper = document.querySelector('.nav-links');
            navToggle.classList.remove('active');
            navLinksWrapper.classList.remove('active');
        });
    });
});




const homeButton = document.querySelector('.home-button');

homeButton.addEventListener('click', () => {
    homeButton.style.transform = 'scale(0.9)';
    
    // Reset the scaling after a short delay
    setTimeout(() => {
        homeButton.style.transform = 'scale(1)';
    }, 300); // 300 milliseconds
});


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        currentSlide = 0;
    }

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Show the first slide
showSlide(currentSlide);

// Auto slide change (optional)
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000); // Change slide every 5 seconds

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        currentSlide = 0;
    }

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        currentSlide = 0;
    }

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function autoSlide() {
    showSlide(currentSlide + 1);
}

// Automatic slide change
setInterval(autoSlide, 2000); // Change slide every 5 seconds

// Show the first slide
showSlide(currentSlide);

// Show the first slide
showSlide(currentSlide);


// ================================================>
// Services page

const serviceLink = document.querySelector('a[href="#service"]');

serviceLink.addEventListener('click', (e) => {
    e.preventDefault();
    const serviceSection = document.getElementById('service');
    const offsetTop = serviceSection.offsetTop;
    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});
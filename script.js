document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        const slides = document.querySelectorAll('.carousel-item');
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        const slides = document.querySelectorAll('.carousel-item');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Add event listeners for next and previous buttons
    document.querySelector('.carousel-control-next')?.addEventListener('click', nextSlide);
    document.querySelector('.carousel-control-prev')?.addEventListener('click', prevSlide);

    // Initially show the first slide
    showSlide(currentSlide);

    // Form submit event listener
    document.getElementById("contact-form")?.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your message!");
        this.reset();
    });

    // Populate articles dynamically (if applicable)
    const articles = [
        {
            title: "The Evolution of Cars",
            content: "Cars have come a long way since the invention of the wheel. This article explores the significant advancements in automotive technology over the decades.",
            author: "Jimmy Ekpo"
        },
        {
            title: "Top 10 Most Popular Cars of 2024",
            content: "Discover the top 10 most popular cars of 2024. This list includes their features, pricing, and customer reviews.",
            author: "Jimmy Ekpo"
        },
        {
            title: "How to Maintain Your Car",
            content: "Proper maintenance is key to keeping your car running smoothly. Here are essential tips every car owner should know.",
            author: "Jimmy Ekpo"
        }
    ];

    const articleList = document.getElementById("article-list");

    articles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <p><em>Written by ${article.author}</em></p>
        `;
        articleList.appendChild(articleElement);
    });

    // Dark/Light mode toggle
    const switchCircle = document.querySelector('.switchcircle');
    const body = document.body;

    switchCircle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            switchCircle.innerHTML = `<ion-icon name="sunny-outline"></ion-icon>`; // Change to sun icon
        } else {
            switchCircle.innerHTML = `<ion-icon name="moon-outline"></ion-icon>`; // Change to moon icon
        }
    });

    // Mobile menu toggle
    const menuButton = document.querySelector('.menu');
    const nav = document.querySelector('header ul');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active'); // Toggle the visibility of the menu
    });
});

// Footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').innerText = currentYear;
});

// Navbar
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('menu-open');
        menuToggle.classList.toggle('open');
    });
});

// Accordion
document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            var icon = this.querySelector('.toggle-icon');
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                panel.style.maxHeight = panel.scrollHeight + 30 + "px";
                icon.textContent = '-';
            }
        });
    }
});

// Portfolio
document.addEventListener('DOMContentLoaded', function() {
    var portfolioItems = [
        {
            type: 'video',
            url: 'assets/MMDA203_C Group 11_Video_1920x1080.mp4',
            message: 'Digital Media - Creation of a Commercial video (Video)'
        },
        {
            type: 'video',
            url: 'assets/The Product Managers Role in the Product Life Cycle_Analysis and Presentation.mp4',
            message: 'The Product Managers Role in the Product Life Cycle - Analysis and Presentation (Video)'
        },
        {
            type: 'pdf',
            url: 'assets/Assignment_Report_Applying the Agile Framework.pdf',
            message: 'Assignment Report - Applying the Agile Framework (PDF)'
        },
        {
            type: 'pdf',
            url: 'assets/Funnel Analysis Report.pdf',
            message: 'Funnel Analysis Report (PDF)'
        },
        {
            type: 'pdf',
            url: 'assets/INDD BRAND IDENTITY GUIDELINES.pdf',
            message: 'INDD Brand Identity Guidelines (PDF)'
        },
        {
            type: 'pdf',
            url: 'assets/Portfolio Collection Part A_OL.pdf',
            message: 'Portfolio Collection Part A_OL (PDF)'
        }
    ];

    var previousIndex = -1;

    var loadButton = document.getElementById('load-item');

    loadButton.addEventListener('click', function() {
        var randomIndex = previousIndex;
        while (randomIndex === previousIndex) {
            randomIndex = Math.floor(Math.random() * portfolioItems.length);
        }
        previousIndex = randomIndex;

        var randomItem = portfolioItems[randomIndex];

        var portfolioItemContainer = document.getElementById('portfolio-item');
        portfolioItemContainer.innerHTML = `<a href="${randomItem.url}" target="_blank">${randomItem.message}</a>`;

        var loadingMessage = document.createElement('p');
        loadingMessage.textContent = 'After clicking the above link, please be patient. The content may take time to load.';
        loadingMessage.classList.add('loading-message');
        portfolioItemContainer.appendChild(loadingMessage);
    });
});
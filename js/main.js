 
 // Footer
 document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').innerText = currentYear;
});



 // NavBAR

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('menu-open');
  });
});


// Accordian

document.addEventListener('DOMContentLoaded', function () {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          var icon = this.querySelector('.toggle-icon');
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
              icon.textContent = '+';
          } else {
              // Set max height properly to ensure all content is visible
              panel.style.maxHeight = panel.scrollHeight + 30 + "px"; // Added 30px to cover any hidden content
              icon.textContent = '-';
          }
      });
  }
});



document.addEventListener('DOMContentLoaded', function() {
  // Portfolio items data
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

  // Get the button element
  var loadButton = document.getElementById('load-item');

  // Event listener for the button click
  loadButton.addEventListener('click', function() {
      var randomIndex = previousIndex;
      while (randomIndex === previousIndex) {
          randomIndex = Math.floor(Math.random() * portfolioItems.length);
      }
      previousIndex = randomIndex;

      // Get the random portfolio item
      var randomItem = portfolioItems[randomIndex];

      // Display the message of the random portfolio item
      var portfolioItemContainer = document.getElementById('portfolio-item');
      portfolioItemContainer.innerHTML = `<a href="${randomItem.url}" target="_blank">${randomItem.message}</a>`;

      // Add the blinking animation to the loading message
      var loadingMessage = document.createElement('p');
      loadingMessage.textContent = 'Click the above link in green. The content will open in a new tab.';
      loadingMessage.classList.add('loading-message');
      portfolioItemContainer.appendChild(loadingMessage);
  });
});

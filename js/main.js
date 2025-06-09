document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Close mobile menu when a nav link is clicked
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll to top button visibility
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.classList.add("scroll-to-top");
  scrollToTopBtn.innerHTML = "&uarr;";
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Form submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const formEntries = Object.fromEntries(formData.entries());

      // Show success message (in a real app, you'd send the data to a server)
      this.innerHTML = `
                <div class="form-success">
                    <h3>Thank you for your message!</h3>
                    <p>I'll get back to you as soon as possible.</p>
                </div>
            `;

      console.log("Form submitted with data:", formEntries);
    });
  }

  // Add animation on scroll
  const animateElements = document.querySelectorAll(
    ".skill-progress, .timeline-item, .project-card, .stat-item"
  );

  // Initial check for elements in viewport
  checkAnimationElements();

  // Check elements on scroll
  window.addEventListener("scroll", checkAnimationElements);

  function checkAnimationElements() {
    const triggerBottom = window.innerHeight * 0.8;

    animateElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add("animate");
      }
    });
  }

  // Add CSS for new elements
  const style = document.createElement("style");
  style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 3rem;
            right: 3rem;
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            border: none;
            font-size: 2.4rem;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 99;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .scroll-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        .form-success {
            text-align: center;
            padding: 4rem 2rem;
        }
        
        .form-success h3 {
            font-size: 2.4rem;
            margin-bottom: 1.5rem;
            color: var(--primary-color);
        }
        
        .skill-progress, .timeline-item, .project-card, .stat-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .skill-progress.animate, .timeline-item.animate, .project-card.animate, .stat-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .timeline-item:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .timeline-item:nth-child(3) {
            transition-delay: 0.4s;
        }
        
        .project-card:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .project-card:nth-child(3) {
            transition-delay: 0.4s;
        }
        
        .stat-item:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .stat-item:nth-child(3) {
            transition-delay: 0.4s;
        }
    `;

  document.head.appendChild(style);

  // Typing effect for hero text
  const heroTitle = document.querySelector(".hero h1");

  if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = "";

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < originalText.length) {
        heroTitle.textContent += originalText.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
  }
});

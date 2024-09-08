const icon = document.querySelector(".icon");
const ul = document.querySelector("ul");
const span = document.querySelectorAll(".icon span")[1];
const featuresDiv = document.querySelector(".features");
const featDivs = document.querySelectorAll(".features .feat");
const servicesDiv = document.querySelector(".services");
const servicesCols = document.querySelectorAll(".services .col");
const servicesDivImage = document.querySelector(".services .image");
const portfolioDiv = document.querySelector(".portfolio");
const portfolioUsers = document.querySelectorAll(".portfolio .card");
const scrollToTop = document.querySelector(".scroll-to-top");

// Icon In Header
icon.onclick = () => {
  if (ul.classList.contains("open")) {
    ul.style.opacity = 0;
    span.style.width = "60%";
    setTimeout(() => {
      ul.classList.remove("open");
    }, 300);
  } else {
    ul.classList.add("open");
    span.style.width = "100%";
    setTimeout(() => {
      ul.style.opacity = 1;
    }, 0);
  }
};

// Start Scroll To Top Functions
function scrollToTopFunction() {
  window.onscroll = () => {
    if (window.scrollY >= 500) {
      scrollToTop.style.right = "20px";
      scrollToTop.onclick = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    } else {
      scrollToTop.style.right = "-36px";
    }
  };
}
scrollToTopFunction();
// End Scroll To Top Functions

// Start Global Functions
function scrollWidnow(element) {
  let scrollElement = false;
  if (window.scrollY >= element.offsetTop - 300) {
    scrollElement = true;
    return scrollElement;
  }
}

// Put The Animation On Elements
function animationElement(oneElement, elements, moreContent) {
  document.addEventListener("scroll", () => {
    const scrollElement = scrollWidnow(oneElement);
    if (scrollElement) {
      elements.forEach((div, index) => {
        div.style.opacity = 1;
        div.style.animation = `${
          index === 0 ? "from-left" : index === 1 ? "from-top" : "from-right"
        } 1s linear`;
      });
      if (oneElement === servicesDiv) {
        servicesDivImage.style.opacity = 1;
        servicesDivImage.style.animation = "from-right 1s linear";
      }
    }
  });
}
// End Global Functions

// Start Features
animationElement(featuresDiv, featDivs);
// End Features

// Start Sevices
animationElement(servicesDiv, servicesCols);
// End Sevices

// Start Portfolio
animationElement(portfolioDiv, portfolioUsers);
// End Portfolio

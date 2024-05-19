document.addEventListener("DOMContentLoaded", function() {
    const starCount = 60; // Change this to the desired number of stars
    const starsContainer = document.querySelector(".stars");
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${randomRange(0, 100)}vh`;
      star.style.left = `${randomRange(0, 100)}vw`;
      star.style.animationDuration = `${randomRange(6, 12)}s`;
      star.style.animationDelay = `${randomRange(0, 10)}s`;
      starsContainer.appendChild(star);
    }
  });
  
  function randomRange(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  
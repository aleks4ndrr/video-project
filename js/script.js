document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(
    "#pants, #shorts, #sock1, #sock2, #tshirt"
  );
  const videoSection = document.querySelector(".main__video-section");

  const observerOptions = {
    root: null, // Observe relative to the viewport
    threshold: 0.6, // Trigger when 60% of video section is visible
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add "converge" class to transition off-screen
        images.forEach((image) => {
          image.classList.add("converge");
          image.style.visibility = "visible"; // Ensure visible if scrolled back up
        });
      } else {
        // Remove "converge" class to transition back to the initial state
        images.forEach((image) => {
          image.classList.remove("converge");
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(videoSection);
});

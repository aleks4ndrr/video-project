document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  const images = document.querySelectorAll(
    "#pants, #shorts, #sock1, #sock2, #tshirt"
  );
  const videoSection = document.querySelector(".main__video-section");
  const machineImg = document.querySelector(".main__machine-img");
  const lightImg = document.querySelector(".main__light-img");
  const videoText = document.querySelector(".main__video-text");
  const iframeVideo = document.querySelector(".main__video");
  const bloopers = document.querySelector(".main__bloopers");
  const footer = document.querySelector(".footer");

  // IntersectionObserver for image convergence
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

  // Event listener for machine image click
  machineImg.addEventListener("click", () => {
    // Hide the machine image, light image, and video text
    machineImg.style.display = "none";
    lightImg.style.display = "none";
    videoText.style.display = "none";

    // Show the iframe video and bloopers section
    iframeVideo.style.display = "block";
    bloopers.style.display = "flex";
    footer.style.display = "flex";
  });
});

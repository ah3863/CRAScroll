document.addEventListener("DOMContentLoaded", () => {
  const imageSections = document.querySelectorAll(".image-section");
  const textSections = document.querySelectorAll(".text-section");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    imageSections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < windowHeight * 0.7) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });

    textSections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < windowHeight * 0.9) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger on page load
});

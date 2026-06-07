const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", () => {
  const button = contactForm.querySelector("button");
  button.textContent = "Opening Email...";
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

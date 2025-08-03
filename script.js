// Simple mobile-friendly toggle (if needed)
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    // future enhancement: smooth scroll or highlight
  });
});

// Contact form placeholder behavior (if form added)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  });
}

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name") || "Guest";
    const service = formData.get("service") || "Salon service";
    const message = formData.get("message") || "";
    const subject = encodeURIComponent(`Papakid enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nService: ${service}\nMessage: ${message}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  });
}

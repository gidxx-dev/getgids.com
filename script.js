// Configuration:
// - To enable form submissions to a server (Formspree or another endpoint), set FORM_ENDPOINT to the full URL.
// - If FORM_ENDPOINT is empty, the form will open the user's mail client as a fallback and also show a demo confirmation.
const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/your-id"

document.addEventListener("DOMContentLoaded", () => {
  // year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav
  const toggle = document.getElementById("mobile-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const open = mobileNav.getAttribute("aria-hidden") === "false";
      mobileNav.setAttribute("aria-hidden", String(!open));
      mobileNav.style.display = open ? "none" : "flex";
      toggle.textContent = open ? "☰" : "✕";
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href && href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Contact form handling
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const note = document.getElementById("form-note");
  const toast = document.getElementById("toast");
  const sendBtn = document.getElementById("send-btn");

  if (note) {
    if (FORM_ENDPOINT) {
      note.textContent = "Form submissions are sent to the configured endpoint.";
    } else {
      note.innerHTML = "Form is in demo mode (no endpoint configured). On submit it will open your email client as a fallback.";
    }
  }

  const showToast = (txt, timeout = 4000) => {
    if (!toast) return;
    toast.textContent = txt;
    toast.style.display = "block";
    toast.setAttribute("aria-hidden", "false");
    setTimeout(() => {
      toast.style.display = "none";
      toast.setAttribute("aria-hidden", "true");
    }, timeout);
  };

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!sendBtn) return;
      sendBtn.disabled = true;
      status.textContent = "";
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !subject || !message) {
        status.style.color = "crimson";
        status.textContent = "Please complete all required fields.";
        sendBtn.disabled = false;
        return;
      }

      if (FORM_ENDPOINT) {
        try {
          const res = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ name, email, subject, message }),
          });
          if (res.ok || res.status === 200 || res.status === 201) {
            status.style.color = "green";
            status.textContent = "Message sent — thank you!";
            form.reset();
            showToast("Message sent. I'll get back to you soon.");
          } else {
            const txt = await res.text().catch(() => "");
            console.error("Form error:", res.status, txt);
            throw new Error("Form submission failed");
          }
        } catch (err) {
          status.style.color = "crimson";
          status.textContent = "Submission failed — please email directly to gideonspiano11@gmail.com";
          showToast("Submission failed. Use email: gideonspiano11@gmail.com");
        } finally {
          sendBtn.disabled = false;
        }
        return;
      }

      // Mailto fallback when no endpoint is configured
      const subjectLine = encodeURIComponent(`[Website] ${subject}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailto = `mailto:gideonspiano11@gmail.com?subject=${subjectLine}&body=${body}`;
      // open mail client
      window.location.href = mailto;

      // show demo confirmation
      status.style.color = "green";
      status.textContent = "Opening your mail client — or copy email: gideonspiano11@gmail.com";
      showToast("Opening your mail client. If it doesn't open, email: gideonspiano11@gmail.com");
      sendBtn.disabled = false;
      form.reset();
    });
  }
});
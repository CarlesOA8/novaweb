
// CONFIGURACIÓN DE CONTACTO
// Sustituye los valores vacíos por tus datos profesionales.

const CONFIG = {
  whatsapp: "526624248159", // Ejemplo: "521XXXXXXXXXX"
  email: ""     // Ejemplo: "contacto@tudominio.com"
};

// MENÚ PARA CELULARES

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("active");

  menuBtn.setAttribute("aria-expanded", String(abierto));
  menuBtn.setAttribute(
    "aria-label",
    abierto ? "Cerrar menú" : "Abrir menú"
  );
  menuBtn.textContent = abierto ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menú");
    menuBtn.textContent = "☰";
  });
});

// BOTÓN DE WHATSAPP

const whatsappBtn = document.getElementById("whatsapp-btn");
const emailBtn = document.getElementById("email-btn");
const contactNotice = document.getElementById("contact-notice");

let contactoConfigurado = false;

const numero = CONFIG.whatsapp.replace(/\D/g, "");

if (/^\d{10,15}$/.test(numero)) {
  const mensaje = encodeURIComponent(
    "Hola, me interesa una página web para mi negocio."
  );

  whatsappBtn.href = `https://wa.me/${numero}?text=${mensaje}`;
  whatsappBtn.target = "_blank";
  whatsappBtn.rel = "noopener noreferrer";
  whatsappBtn.hidden = false;

  contactoConfigurado = true;
}

// BOTÓN DE CORREO

if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email)) {
  emailBtn.href =
    `mailto:${CONFIG.email}?subject=${encodeURIComponent("Cotización de página web")}`;

  emailBtn.hidden = false;
  contactoConfigurado = true;
}

if (contactoConfigurado) {
  contactNotice.hidden = true;
}

// AÑO AUTOMÁTICO EN FOOTER

document.getElementById("year").textContent =
  new Date().getFullYear();

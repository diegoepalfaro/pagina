
document.addEventListener("DOMContentLoaded", function () {
    // Menu para dispositivos moviles
    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menu" : "Abrir menu"
            );
            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Abrir menu");
                menuButton.textContent = "☰";
            });
        });
    }

    // Ano automatico del pie de pagina
    document.querySelectorAll(".current-year").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // Formulario de contacto: demostracion sin servidor
    const contactForm = document.getElementById("contactForm");
    const contactMessage = document.getElementById("contactMessage");

    if (contactForm && contactMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            contactMessage.textContent =
                "Formulario validado correctamente. Esta es una demostracion; " +
                "el mensaje no se ha enviado a la clinica.";
            contactMessage.style.display = "block";
            contactForm.reset();
        });
    }

    // Acceso de pacientes: interfaz de demostracion
    const patientForm = document.getElementById("patientForm");
    const patientMessage = document.getElementById("patientMessage");

    if (patientForm && patientMessage) {
        patientForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!patientForm.checkValidity()) {
                patientForm.reportValidity();
                return;
            }

            patientMessage.textContent =
                "Esta pagina es una demostracion. El acceso real requiere " +
                "un sistema de autenticacion seguro conectado a un servidor.";
            patientMessage.style.display = "block";
        });
    }
});

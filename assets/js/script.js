import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// Inicializar tooltips
document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Asegúrate de que el modal y el input existen
    const myModal = document.getElementById('myModal');
    const myInput = document.getElementById('myInput');

    if (myModal && myInput) {
        myModal.addEventListener('shown.bs.modal', () => {
            myInput.focus();
        });
    }

    // Función para mostrar alerta
    function showAlert() {
        alert("Mensaje enviado con éxito!");
    }

    // Agregar evento click al botón con ID 'enviar'
    const enviarButton = document.getElementById('enviar');
    if (enviarButton) {
        enviarButton.addEventListener('click', showAlert);
    }
});

$(document).ready(function() {
    // Inicialización de tooltips para todos los elementos con data-bs-toggle="tooltip"
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Evento al hacer clic en el elemento con ID #enviarCorreo
    $('#enviarCorreo').on('click', function () {
        alert('El correo fue enviado correctamente');
    });

    // Toggle para mostrar/ocultar la clase 'card-clicked' al hacer clic en cualquier .card
    $('.card').on('click', function() {
        // Remover la clase 'card-clicked' de todas las cards excepto la que se ha clicado
        $('.card').not(this).removeClass('card-clicked');
        // Alternar la clase 'card-clicked' solo en la card clicada
        $(this).toggleClass('card-clicked');
    });

    // Event listener para actualizar indicadores al cambiar el slide del carrusel (#carrousel)
    $('#carrousel').on('slid.bs.carousel', function () {
        // Obtenemos el índice del slide activo
        let currentIndex = $('.carousel-item.active').index();
        // Actualizamos la clase 'activo' en los indicadores del carrusel
        $('.indicadores-carousel .indicador').removeClass('activo');
        $('.indicadores-carousel .indicador').eq(currentIndex).addClass('activo');
    });
});
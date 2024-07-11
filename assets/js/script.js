$(document).ready(function () {
    // Inicialización de tooltips para todos los elementos con data-bs-toggle="tooltip"
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Evento al hacer clic en el elemento con ID #enviarCorreo
    $('#enviarCorreo').on('click', function (event) {
        event.preventDefault();
        alert('El correo fue enviado correctamente');
        $('form')[0].reset();
    });

    // Toggle para mostrar/ocultar la clase 'card-clicked' al hacer clic en cualquier .card
    $('.card').on('click', function () {
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


    // Seleccionar todas las columnas con la clase 'col-md-4' y agregar un evento click
    $('.col-md-4').click(function () {
        // Encontrar los elementos dentro de la columna
        var customBox = $(this).find('.custom-box'); // Seleccionar el elemento con la clase 'custom-box' y se agrega a la variable
        var paragraph = $(this).find('p'); // Seleccionar el párrafo dentro de la columna y se agrega a la variable

        // Invertir su posición
        if (customBox.next().is('p')) {
            // Si el siguiente elemento después de 'customBox' es un párrafo, mover el párrafo antes de 'customBox'
            paragraph.insertBefore(customBox);
        } else {
            // Si el siguiente elemento después de 'customBox' no es un párrafo, mover 'customBox' antes del párrafo
            customBox.insertBefore(paragraph);
        }
    });

});
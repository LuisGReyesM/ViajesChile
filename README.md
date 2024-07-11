# Página Web: Viajes Chile (Desafío Latam)

Este repositorio contiene los archivos y recursos para la página web **Viajes Chile**.

## Contenido
- [Página Web: Viajes Chile (Desafío Latam)](#página-web-viajes-chile-desafío-latam)
  - [Contenido](#contenido)
  - [Descripción](#descripción)
  - [Estructura del Repositorio](#estructura-del-repositorio)
  - [Uso](#uso)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Codigos](#codigos)
    - [Código: Carrusel de Imágenes](#código-carrusel-de-imágenes)
    - [Código: Formulario de contacto](#código-formulario-de-contacto)
    - [Código: JQuery para Funcionalidades](#código-jquery-para-funcionalidades)
  - [Autor](#autor)


## Descripción

**Viajes Chile** Es una web estatica para medir los conocimientos aprendidos en en el módulo 2 de Desafío LATAM:

- **Menú**: Cuenta con un menú que nos redirige a las diferentes secciones de la página .
- **Inicio**: Carrusel de imagenes con boostrap y con la impelemntación de esferas en jquery y css.
- **Quiénes Somos**: Se generan 3 columas responsivas que se ocultan en dispositivos pequeños, ademas de poder ordenar el custom-box y el P al hacer click.
- **Destacados**: Sección con 4 cards con boostrap y que se agrandan al hacer click sobre ellas, utilizando jquery.
- **Contacto**: Formulario de contacto para consultas y comentarios, se despliega un alert, jquery, al presionar el boton enviar. .

## Estructura del Repositorio

- **index.html**: Página principal de la web.
- **assets/**: Directorio que contiene recursos como imágenes, estilos CSS y scripts JavaScript.
- **README.md**: Este archivo, proporcionando información sobre la web y su estructura.

## Uso

1. Clona este repositorio: `git clone https://github.com/LuisGReyesM/ViajesChile.git`
2. Abre `index.html` en tu navegador para ver la página web.

## Tecnologías Utilizadas

- HTML
- Boostrap
- CSS
- JavaScript (jQuery)
- Font Awesome para iconos
- Google Fonts para tipografía personalizada


## Codigos

### Código: Carrusel de Imágenes

```html
<!-- HTML para el carrusel de imágenes -->
<section id="carrousel">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
                <img src="./assets/img/carousel1.jpg" class="d-block w-100" alt="Imagen 1">
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <img src="./assets/img/carousel2.jpg" class="d-block w-100" alt="Imagen 2">
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <img src="./assets/img/carousel3.jpg" class="d-block w-100" alt="Imagen 3">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
    </div>
</section>
```


### Código: Formulario de contacto

```html
 <!-- Sección: Contacto -->
    <section id="contacto" class="container d-flex flex-column align-items-center mt-2 pt-2 mb-2 contact-section">
        <div class="form-container">
            <div class="text-center mb-4">
                <h2>Contacto</h2>
            </div>
            <form>
                <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input type="text" class="form-control form-control-sm">
                </div>
                <div class="mb-3">
                    <label class="form-label">Asunto</label>
                    <input type="text" class="form-control form-control-sm">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
                <button type="submit" id="enviarCorreo" class="btn btn-primary me-2" data-bs-toggle="tooltip"
                    data-bs-placement="right" title="Enviar formulario">
                    Enviar
                </button>
            </form>
        </div>
    </section>
```


### Código: JQuery para Funcionalidades

```javascript
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
});
```

## Autor

- **Luis Reyes Miranda**
  - Desarrollador Web



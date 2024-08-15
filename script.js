document.addEventListener('DOMContentLoaded', () => {
    const botonesCategoria = document.querySelectorAll('.BotonCategoria');
    const seleccionImagen = document.getElementById('SeleccionImagen');
    const creacionMensaje = document.getElementById('CreacionMensaje');
    const opcionesEstilo = document.getElementById('OpcionesEstilo');
    const vistaPrevia = document.getElementById('VistaPrevia');
    const botonGenerar = document.getElementById('Generar');
    const contenedorSalida = document.getElementById('ContenedorSalida');
    const textoSalida = document.getElementById('TextoSalida');
    const imagenSalida = document.getElementById('ImagenSalida');

    const imagenes = {
        navidad: ['img/navidad1.jpg', 'img/navidad2.jpg', 'img/navidad3.jpg'],
        amor: ['img/valentin2.jpg', 'img/valentin3.png', 'img/valentin4.jpg'],
        padre: ['img/padre3.jpg', 'img/padre4.jpg', 'img/padre5.jpg']
    };

    let categoriaSeleccionada = '';
    let imagenSeleccionada = '';

    botonesCategoria.forEach(boton => {
        boton.addEventListener('click', () => {
            categoriaSeleccionada = boton.getAttribute('data-categoria');
            seleccionImagen.innerHTML = '';
            imagenes[categoriaSeleccionada].forEach((imgSrc, index) => {
                const imgElemento = document.createElement('img');
                imgElemento.src = imgSrc;
                imgElemento.alt = `Imagen ${index + 1}`;
                imgElemento.classList.add('selectable-image');
                imgElemento.addEventListener('click', () => seleccionarImagen(imgElemento));
                seleccionImagen.appendChild(imgElemento);
            });
            seleccionImagen.classList.remove('Oculto');
            creacionMensaje.classList.remove('Oculto');
            opcionesEstilo.classList.remove('Oculto');
            botonGenerar.classList.remove('Oculto');
        });
    });

    function seleccionarImagen(imgElemento) {
        document.querySelectorAll('.selectable-image').forEach(img => {
            img.classList.remove('selected');
        });

        imgElemento.classList.add('selected');
        imagenSeleccionada = imgElemento.src;
    }

    botonGenerar.addEventListener('click', () => {
        if (!imagenSeleccionada) {
            alert('Por favor, selecciona una imagen.');
            return;
        }

        const mensaje = document.getElementById('Mensaje').value;
        const nombreRemitente = document.getElementById('NombreRemitente').value;
        const colorFondo = document.getElementById('ColorFondo').value;
        const estiloFuente = document.getElementById('EstiloFuente').value;
        const tamanoFuente = document.getElementById('TamanoFuente').value;
        const colorTexto = document.getElementById('ColorTexto').value;

        const estiloBorde = document.getElementById('EstiloBorde').value;
        const colorBorde = document.getElementById('ColorBorde').value;
        const tamanoBorde = document.getElementById('TamanoBorde').value;

        contenedorSalida.style.backgroundColor = colorFondo;
        contenedorSalida.style.borderStyle = estiloBorde;
        contenedorSalida.style.borderColor = colorBorde;
        contenedorSalida.style.borderWidth = `${tamanoBorde}px`;
        contenedorSalida.style.padding = '10px';
        contenedorSalida.style.borderRadius = '5px';

        textoSalida.innerHTML = `<div>${mensaje} - ${nombreRemitente}</div>`;
        textoSalida.style.fontFamily = estiloFuente;
        textoSalida.style.fontSize = `${tamanoFuente}px`;
        textoSalida.style.color = colorTexto;
        textoSalida.style.backgroundColor = colorFondo;

        imagenSalida.innerHTML = `<img src="${imagenSeleccionada}" alt="Imagen Seleccionada" class="generated-image border-option">`;
        const imagenGenerada = document.querySelector('.generated-image');
        imagenGenerada.style.borderStyle = estiloBorde;
        imagenGenerada.style.borderColor = colorBorde;
        imagenGenerada.style.borderWidth = `${tamanoBorde}px`;

        vistaPrevia.classList.remove('Oculto');
    });
});

// Hacer que el menú aparezca cuando se le de clic al botón de menú

let boton_menu = document.getElementById('boton_menu'),
    menu_principal = document.getElementById('menu_principal');

boton_menu.addEventListener('click', () => {
    menu_principal.classList.toggle('menu_activo');
});

// Hacer que la barra de búsqueda aparezca cuando se le de clic al botón de buscar

let boton_buscar = document.getElementById('boton_buscar'),
    barra_busqueda = document.getElementById('contenedor_barra_busqueda');

boton_buscar.addEventListener('click', () => {
    barra_busqueda.classList.toggle('barra_busqueda_activa');
});

// Función para enviar el pedido por WhatsApp
document.getElementById('pedido-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const pedido = document.getElementById('pedido').value;

    const mensaje = `Hola, soy ${nombre}. Mi pedido es: ${pedido}. Mi teléfono es: ${telefono}.`;
    const url = `https://wa.me/541156478391?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});

// Obtener elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Función para alternar el menú móvil
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Cerrar el menú al hacer clic en un enlace
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
// También cerrar el menú si se hace clic en el botón de pedido
const orderButton = mobileMenu.querySelector('button');
if (orderButton) {
    orderButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}
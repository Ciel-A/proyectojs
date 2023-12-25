// Datos de usuarios (simulados, en un entorno real se almacenarían de forma segura en el servidor)
const usuarios = [
  { username: 'usuario1', password: 'contraseña1' },
  { username: 'usuario2', password: 'contraseña2' },
];

function login() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Buscar el usuario en la lista de usuarios
  const usuarioAutenticado = usuarios.find(user => user.username === username && user.password === password);

  return usuarioAutenticado; // Devolver el resultado de la autenticación
}

function iniciarSesion() {
  const usuarioAutenticado = login(); // Obtener el resultado de la autenticación

  if (usuarioAutenticado) {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('contenido').style.display = 'block';
  } else {
    alert('Inicio de sesión fallido. Verifica tus credenciales.');
  }
}

function cerrarModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// Muestra el modal al cargar la página
window.onload = function () {
  document.getElementById('loginModal').style.display = 'block';
};

/*fin del login */




/*inicio seccion de calculos */
let productoSeleccionado = {
  nombre: '',
  precio: 0
};

let totalAcumulado = 0;  // Variable para almacenar el total acumulado

function manejarClicAgregar(nombre, precio) {
  // Actualizar el objeto productoSeleccionado con la información del producto
  productoSeleccionado.nombre = nombre;
  productoSeleccionado.precio = precio;
// Sumar el precio al total acumulado
  totalAcumulado += precio;

  // Mostrar la información en elementos <p> 
  mostrarInformacion();
}

function mostrarInformacion() {
// Seleccionar los elementos <p> en el HTML
const infoProductoElemento = document.getElementById('infoProducto');
const infoTotalElemento = document.getElementById('infoTotal');

// Actualizar el contenido de los elementos <p>
infoProductoElemento.textContent = `Producto seleccionado: ${productoSeleccionado.nombre} - $${productoSeleccionado.precio}`;
infoTotalElemento.textContent = `Total acumulado: $${totalAcumulado}`;
}





//el queryselectorall se comporta casi como un array por lo tanto se puede ocupar el metodo foreach para iterar sobre el y realizar la funciona de detectar de donde proviene el click y realizar las acciones correspondientes
document.querySelectorAll('.btn-agregar').forEach(function(btnAgregar) {
  btnAgregar.addEventListener('click', function() {
    const producto = this.closest('.producto');
    const nombre = producto.querySelector('h4').textContent.trim();
    const precioTexto = producto.querySelector('p').textContent.trim();
    const precio = parseInt(precioTexto);

    manejarClicAgregar(nombre, precio);
  });
});

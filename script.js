// Función para agregar un producto
function agregarProducto() {
  
  const nombreInput = document.getElementById('nombre');
  const imagenInput = document.getElementById('imagen');
  const precioInput = document.getElementById('precio');
  const contenedor = document.getElementById('contenedorProductos');

  const nombre = nombreInput.value;
  const imagen = imagenInput.value;
  const precio = precioInput.value;

  if (!nombre || !imagen || !precio) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const colDiv = document.createElement('div');
  colDiv.classList.add('col-md-4');

  const productoDiv = document.createElement('div');
  productoDiv.classList.add('cart-item', 'producto');

  const imgElement = document.createElement('img');
  imgElement.src = imagen;
  imgElement.alt = nombre; // Establecer el texto alternativo como el nombre del producto
  imgElement.classList.add('img-fluid');

  const nombreElement = document.createElement('h4');
  nombreElement.textContent = `"${nombre}"`;

  const precioElement = document.createElement('p');
  precioElement.textContent = `$${precio}`;

  const btnAgregar = document.createElement('button');
  btnAgregar.classList.add('boton', 'btn', 'btn-success', 'btn-agregar');
  btnAgregar.textContent = 'Botón 1'; // Puedes personalizar este texto según tus necesidades

  const btnBorrar = document.createElement('button');
  btnBorrar.classList.add('borrar', 'btn', 'btn-success', 'btn-borrar');
  btnBorrar.textContent = 'Borrar';  

  productoDiv.appendChild(imgElement);
  productoDiv.appendChild(nombreElement);
  productoDiv.appendChild(precioElement);
  productoDiv.appendChild(btnAgregar);
  productoDiv.appendChild(btnBorrar)

  colDiv.appendChild(productoDiv);

  contenedor.appendChild(colDiv);

  // Limpiar los campos del formulario
  nombreInput.value = '';
  imagenInput.value = '';
  precioInput.value = '';
  // Guardar el contenido del contenedor en localStorage
  guardarContenidoEnLocalStorage();
}

// Función para guardar el contenido del contenedor en localStorage
function guardarContenidoEnLocalStorage() {
  const contenedor = document.getElementById('contenedorProductos');
  const contenido = contenedor.innerHTML;
  localStorage.setItem('contenidoContenedor', contenido);
}

// Función para cargar el contenido del contenedor desde localStorage
function cargarContenidoDesdeLocalStorage() {
  const contenedor = document.getElementById('contenedorProductos');
  const contenidoGuardado = localStorage.getItem('contenidoContenedor');
  if (contenidoGuardado) {
    contenedor.innerHTML = contenidoGuardado;
  }
}

// Evento para agregar el producto al hacer clic en el botón
document.getElementById('agregarProductoBtn').addEventListener('click', function() {
  agregarProducto();
  // Después de agregar un producto, guarda el contenido actualizado en localStorage
  guardarContenidoEnLocalStorage();
});

// Delegación de eventos para el contenedorProductos
document.getElementById('contenedorProductos').addEventListener('click', function(event) {
  var elementoClickeado = event.target;

  // Verifica si el clic provino de un elemento con la clase específica
  if (elementoClickeado.classList.contains('borrar')) {
    var miElemento = elementoClickeado.closest('.col-md-4');

    // Verifica si el elemento existe antes de intentar eliminarlo
    if (miElemento) {
      // Elimina el elemento
      miElemento.remove();
      // Después de eliminar un producto, guarda el contenido actualizado en localStorage
      guardarContenidoEnLocalStorage();
    } else {
      console.log('El elemento no existe.');
    }
  }
});

// Cargar el contenido almacenado en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', cargarContenidoDesdeLocalStorage);




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
    document.getElementById('app').style.display = 'block';
  } else {
    alert('No se inicio como administrador!.');
    document.getElementById('app').style.display = 'none';
    document.getElementById('loginModal').style.display = 'none';
    // Obtén todos los elementos con la clase 'btn-borrar'
var botonesABorrar = document.querySelectorAll('.btn-borrar');

// Itera sobre los botones y elimínalos
botonesABorrar.forEach(function(boton) {
  boton.remove();
});


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


function toggleCart() {
  let cartContent = document.querySelector('.cart-content');
  cartContent.style.display = (cartContent.style.display === 'block') ? 'none' : 'block';
}



function toggleCart() {
    let cartContent = document.getElementById('cartContent');
    if (cartContent) {
        cartContent.style.display = (cartContent.style.display === 'block') ? 'none' : 'block';
    }
}



let totalAcumulado = 0;
const productos = [];

document.getElementById("contenedor").addEventListener("click", function (event) {
    // Verifica si el objetivo (target) del evento es un botón
    if (event.target.classList.contains("boton")) {
        // Encuentra el contenedor del producto más cercano al botón clicado
        const contenedorProducto = event.target.closest(".producto");

        // Obtiene los datos del contenedor del producto
        const imagen = contenedorProducto.querySelector("img").getAttribute("src");
        const nombre = contenedorProducto.querySelector("h4").textContent;
        const precio = parseFloat(contenedorProducto.querySelector("p").textContent.slice(1));

        // Crea un objeto con la información
        const producto = {
            imagen: imagen,
            nombre: nombre,
            precio: precio
        };
        totalAcumulado += precio;

        // Almacena el objeto en el array
        productos.push(producto);

        // Puedes imprimir o realizar otras acciones con el objeto almacenado
        console.log("Producto clicado:", producto);

        // Muestra el array completo
        console.log("Array de productos:", productos);
        // Llama a la función para mostrar los productos en el carrito
        mostrarProductosEnCarrito();

        // Muestra el total acumulado después de mostrar los productos
        console.log(totalAcumulado);
        actualizarTotalAcumulado();
    }
});

function mostrarProductosEnCarrito() {
    // Obtener el elemento contenedor
    const cartContent = document.getElementById('cartContent');

    // Limpiar el contenido del carrito antes de mostrar los productos
    cartContent.innerHTML = '';

    // Iterar sobre el array de productos y crear elementos para cada uno
    productos.forEach(producto => {
        // Crear un nuevo div para el producto
        const divProducto = document.createElement('div');
        divProducto.classList.add('cart-item', 'producto');

        // Crear elementos para la imagen, nombre y precio
        const imgElement = document.createElement('img');
        imgElement.src = producto.imagen;
        imgElement.alt = producto.nombre;

        const h4Element = document.createElement('h4');
        h4Element.textContent = producto.nombre;

        const pElement = document.createElement('p');
        pElement.textContent = `$${producto.precio.toFixed(2)}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.addEventListener('click', function () {
            console.log("Botón Eliminar clicado");
            // Llama a la función para eliminar el producto
            eliminarProducto(producto);
        });

        // Agregar elementos al div del producto
        divProducto.appendChild(imgElement);
        divProducto.appendChild(h4Element);
        divProducto.appendChild(pElement);
        divProducto.appendChild(botonEliminar);

        // Agregar el div del producto al contenedor
        cartContent.appendChild(divProducto);
    });
}

function eliminarProducto(producto) {
    console.log("Eliminar producto:", producto);

    // Encuentra la posición del producto en el array
    const index = productos.findIndex(p => p.nombre === producto.nombre);

    // Si se encuentra, elimina el producto del array
    if (index !== -1) {
        totalAcumulado -= productos[index].precio; // Resta el precio del producto eliminado al total acumulado
        productos.splice(index, 1);

        // Vuelve a mostrar los productos en el carrito
        mostrarProductosEnCarrito();
        actualizarTotalAcumulado();
    }
}

function actualizarTotalAcumulado() {
    let mitotal = document.getElementById('totalAcumulado');
    mitotal.textContent = `El total acumulado es de $${totalAcumulado.toFixed(2)}`;
}
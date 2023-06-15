
# Transform - Tienda de cursos en línea 

Transform es una tienda de cursos en línea donde puedes desarrollar tus habilidades y alcanzar tus metas a través de cursos especializados. Este proyecto final consiste en una aplicación web que utiliza HTML, CSS y JavaScript para crear una experiencia interactiva y atractiva para los usuarios.

## Tecnologías utilizadas
- HTML
- CSS
- JavaScript
- JSON (simulador de API local)
- SweetAlert2: Librería de JavaScript utilizada para mostrar mensajes y alertas interactivas.
- Bootstrap: Framework de CSS utilizado para estilizar la página de manera rápida y sencilla.

## Sobre el proyecto

Transform consta de los siguientes archivos:

- `index.html`: Página principal que muestra la tienda en línea de cursos.
- `cursos.css`: Archivo CSS que contiene estilos personalizados para la tienda.
- `cursos.json`: Archivo JSON que simula una API local y contiene la información de los cursos.
- `cursos.js`: Archivo JavaScript que se encarga de mostrar los cursos en la tienda y gestionar la interacción del usuario.
- `app.js`: Archivo JavaScript principal que inicializa la aplicación y se encarga de la gestión global del carrito de compras.
- `carrito.js`: Archivo JavaScript que contiene las funciones relacionadas con el carrito de compras.

## Funcionalidades

- Mostrar cursos: La página principal muestra una lista de cursos obtenidos del archivo `cursos.json`. Cada curso muestra su imagen, nombre, precio, descripción y características.
- Agregar cursos al carrito: Al hacer clic en el botón "Comprar" de un curso, se agrega al carrito de compras. Si el curso ya está en el carrito, se muestra un mensaje de información.
- Ver carrito: Al hacer clic en el enlace "Tienda" en la barra de navegación, se muestra el contenido del carrito en un modal. En el modal, se muestra la lista de cursos agregados al carrito, con la opción de eliminar cursos individualmente.
- Contador de carrito: En la barra de navegación, se muestra un contador que indica la cantidad de cursos agregados al carrito.
- Almacenamiento local: Los cursos agregados al carrito se almacenan en el almacenamiento local utilizando localStorage, lo que permite que los cursos persistan incluso si el usuario cierra la página o se recarga. Al cargar la página, el carrito se carga desde localStorage y se muestra en el modal de carrito.

## Instrucciones de instalación

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.

## Estructura del proyecto
- `index.html` 
- `cursos.css`
- `cursos.json`
- `cursos.js`
- `app.js`
- `carrito.js`



## Sobre el codigo 

El código se divide en varios archivos JavaScript que se encargan de distintas funcionalidades:

- `cursos.js`: Este archivo se encarga de obtener los datos de los cursos desde el archivo JSON `cursos.json` y mostrarlos en la tienda. También se encarga de gestionar la interacción del usuario al agregar cursos al carrito.

- `app.js`: Este es el archivo JavaScript principal de la aplicación. Se encarga de inicializar la aplicación, cargar el carrito de compras desde el almacenamiento local, y proporciona funciones globales para agregar cursos al carrito, eliminar cursos del carrito y actualizar el contador del carrito en la barra de navegación.

- `carrito.js`: Este archivo contiene las funciones relacionadas con el carrito de compras, como pintar el contenido del carrito en el modal, eliminar cursos del carrito y calcular el total a pagar.

Una de las funcionalidades más importantes es la implementación de localStorage para almacenar el carrito de compras del usuario de forma local en el navegador. Esto permite que los cursos agregados al carrito persistan incluso si se cierra la página o se recarga. Al cargar la página, el carrito se carga desde localStorage y se muestra en el modal de carrito.

Se utilizan varias funciones clave en el código:

 - `agregarCurso`: Esta función se llama cuando el usuario hace clic en el botón "Agregar al carrito" de un curso. Toma como argumento el ID del curso y agrega el curso correspondiente al carrito. Si el curso ya está en el carrito, simplemente se actualiza la cantidad. Luego se llama a la función   actualizarCarrito para actualizar la vista del carrito.
- `actualizarCarrito`: Esta función se llama cada vez que se agrega un curso al carrito, se elimina un curso del carrito o se actualiza la cantidad de un curso en el carrito. Actualiza la vista del carrito mostrando todos los cursos en el carrito, junto con la cantidad y el precio total del carrito.
- `eliminarCurso`: Esta función se llama cuando el usuario hace clic en el botón "Eliminar" junto a un curso en el carrito. Toma como argumento el ID del curso y elimina el curso correspondiente del carrito. Luego se llama a la función actualizarCarrito para actualizar la vista del carrito.
- `guardarLocal`: Esta función se llama cada vez que se agrega un curso al carrito o se elimina un curso del carrito. Actualiza el almacenamiento local con la lista actual de cursos en el carrito.
- `cargarLocal`: Esta función se llama cada vez que se carga la página y carga la lista de cursos en el carrito desde el almacenamiento local, si hay alguno.

### Feedback

Agradezco cualquier feedback o sugerencia que puedas brindar. Si hay áreas que se pueden mejorar o sugerencias para futuros proyectos, son totalmente bienvenidas y serán recibidas con aprecio.


## Contacto

Si tienes alguna pregunta o sugerencia sobre este proyecto, no dudes en contactarme. Puedes encontrarme en [admerescobar](https://github.com/admerescobar) o enviarme un correo electrónico a [admerescobar@gmail.com](admerescobar@gmail.com).



Admer Escobar (Alumno en Coderhouse - Curso de JavaScript)
 
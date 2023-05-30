# Tienda de cursos

Este proyecto es una tienda de cursos en línea desarrollada con JavaScript, HTML y CSS.

## Funcionalidades

El usuario puede agregar cursos al carrito de compras.
El usuario puede ver los detalles de un curso al hacer clic en él.
El usuario puede eliminar cursos del carrito de compras.
El carrito de compras mantiene la cantidad y el precio actualizado en todo momento.
Los cursos agregados al carrito se almacenan en el almacenamiento local y se mantienen incluso si el usuario cierra el navegador.

### Cómo usar "para los compañeros de coder"

Descarga o clona este repositorio y abre el archivo index.html en tu navegador. Una vez que estés en la página principal, puedes navegar por los cursos disponibles y agregarlos al carrito de compras haciendo clic en el botón "Agregar al carrito". Puedes acceder a tu carrito haciendo clic en el icono de carrito en la esquina superior derecha de la pantalla.

## Estructura del proyecto

### El proyecto se divide en tres secciones principales:

preentregasJs.html: Este archivo contiene la estructura HTML básica de la página y los elementos necesarios para mostrar los cursos disponibles y el carrito de compras.
cursos.css: Este archivo contiene todo el código CSS utilizado para diseñar la página y hacerla responsiva.
Implementa 3 Js:  "app.js,carrito.js,cursos.js" Estos archivos contienen todo el código JavaScript utilizado para agregar cursos al carrito, actualizar el carrito, eliminar cursos del carrito y almacenar los cursos en el almacenamiento local.

## Sobre el código

### Aquí se describen las funciones principales que se utilizan en los archivos Js:

Función agregarCurso
Esta función se llama cuando el usuario hace clic en el botón "Agregar al carrito". Toma como argumento el ID del curso y agrega el curso correspondiente al carrito. Si el curso ya está en el carrito, simplemente se actualiza la cantidad. Luego se llama a la función actualizarCarrito para actualizar la vista del carrito.

Función actualizarCarrito
Esta función se llama cada vez que se agrega un curso al carrito, se elimina un curso del carrito o se actualiza la cantidad de un curso en el carrito. Actualiza la vista del carrito mostrando todos los cursos en el carrito y la cantidad y el precio total del carrito.

Función eliminarCurso
Esta función se llama cuando el usuario hace clic en el botón "Eliminar" junto a un curso en el carrito. Toma como argumento el ID del curso y elimina el curso correspondiente del carrito. Luego se llama a la función actualizarCarrito para actualizar la vista del carrito.

#### Implementa localstorage
Función guardarLocal 
Esta función se llama cada vez que se agrega un curso al carrito o se elimina un curso del carrito. Actualiza el almacenamiento local con la lista actual de cursos en el carrito.

Función cargarLocal
Esta función se llama cada vez que se carga la página y carga la lista de cursos en el carrito desde el almacenamiento local, si hay alguno.


### Feedback

Espero su devolucion con todo el optimismo posible, si hay algo o muchas cosas que mejorar y me van a ayudar en los proximos proyectos, siempre son totalmente bienvenidos y recibidos con total aprecio.

## Contacto

Si tienes alguna pregunta o sugerencia sobre este proyecto, no dudes en contactarme. Puedes encontrarme en [admerescobar](https://github.com/admerescobar) o enviarme un correo electrónico a [admerescobar@gmail.com](admerescobar@gmail.com).



Admer Escobar (Alumno en Coderhouse - Curso de JavaScript)

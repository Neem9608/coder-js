// Definición de la clase Curso
class Curso {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const cursos = [];
cursos.push(
  new Curso(1, "Habilidad", 50),
  new Curso(2, "Obediencia", 30),
  new Curso(3, "Discapacidad", 100)
);

// Función para validar si un valor está vacío
function validarVacio(valor) {
  let vacio = "";
  // Condición para validar si el valor está vacío
  if (valor == vacio) {
    return true;
  } else return false;
}

let mostrarCursos = (arr) => {
  message = ""; // Variable para almacenar los mensajes
  arr.forEach(
    (curso) => (message += `${curso.nombre} - $ ${curso.precio} USD` + "\n")
  );
  return message;
};

let carrito = [];
let seleccion = prompt(
  "Bienvenid@ A continuación nuestra lista de cursos,desea continuar? \nEscriba una opcion: si o no."
);
console.log(seleccion);
// Ciclo para validar si la selección está vacía
while (validarVacio(seleccion)) {
  alert("por favor, complete este espacio");
  seleccion = prompt("ingrese un caracter: si o no.");
}
// Ciclo para validar que el usuario ingrese la opción correcta
while (seleccion.toLowerCase() != "si" && seleccion.toLowerCase() != "no") {
  alert("por Favor ingrese un caracter valido");
  seleccion = prompt("escriba una opcion: si o no");
}
// Condición si el usuario elige "si"
if (seleccion == "si" || seleccion == "Si" || seleccion == "SI") {
    // Código adicional para realizar si el usuario selecciona "si"
} else if (seleccion.toLowerCase() == "no") {
  alert("Gracias por visitar la pagina");
  alert("presione F5 ó Recargue la pagina  para seguir Interactuando");
}
while (seleccion != "no") {
  let curso = prompt(
    "Agrega un curso a tu carrito: \n" + mostrarCursos(cursos)
  );
  while (
    curso.toLowerCase() != "habilidad" &&
    curso.toLowerCase() != "obediencia" &&
    curso.toLowerCase() != "discapacidad"
  ) {
    alert("por Favor ingrese un caracter valido");
    curso = prompt("Agrega un curso a tu carrito: \n" + mostrarCursos(cursos));
  }

  // Ciclo para validar si el valor de "curso" está vacío
  while (validarVacio(curso)) {
    curso = prompt(
      "Por favor, complete este espacio\n" + mostrarCursos(cursos)
    );
  }
  let precio = 0;

  // Utilizamos el método "find" para buscar el curso seleccionado en el array de cursos
  let cursoEncontrado = cursos.find(
    (elemento) => elemento.nombre.toLowerCase() == curso.toLowerCase()
  );
  carrito.push(cursoEncontrado);
  alert(`Curso encontrado: ${cursoEncontrado.nombre}`);

  precio = cursoEncontrado.precio;

  seleccion = prompt("¿desea agregar otro curso? Escriba: si o no");
  // Ciclo para validar si la selección está vacía
  while (validarVacio(seleccion)) {
    alert("por favor, complete este espacio");
    seleccion = prompt("¿desea agregar otro curso? Escriba: si o no");
  }
  // Ciclo para validar que el usuario ingrese la opción correcta
  while (seleccion.toLowerCase() != "si" && seleccion.toLowerCase() != "no") {
    alert("por Favor ingrese un caracter valido");
    seleccion = prompt("escriba una opcion: si o no");
  }
// Si la selección es "no", se muestra el mensaje de despedida y se imprime el resumen del carrito
  while (seleccion == "no") {
    alert("gracias y hasta pronto");
    carrito.forEach((carritoFinal) => {
      console.log(
        `curso: ${carritoFinal.nombre}, El Total a pagar por este curso es: $${carritoFinal.precio} USD.`
      );
    });
    break;
  }
}
// Calculamos el total a pagar sumando los precios de los cursos en el carrito
const total = carrito.reduce((acc, el) => acc + el.precio, 0);
console.log(`el total a pagar por su compra es: $${total} USD.`);
alert(
  "Le invito a revisar el total en la consola, SI agregó un producto le saldra resumen a pagar."
);

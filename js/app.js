const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Recorremos el array de cursos y creamos los elementos HTML para mostrarlos
cursos.forEach((curso) => {
  const content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${curso.img}">
    <h3>${curso.nombre}</h3>
    <p class="price">${curso.precio} $</p>
    <p>${curso.descripcion}</p>
    <ul>
      ${curso.caracteristicas
        .map((caracteristica) => `<li>${caracteristica}</li>`)
        .join("")}
    </ul>
  `;
  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.className = "comprar";
  comprar.innerText = "Comprar";

  content.append(comprar);
  comprar.addEventListener("click", () => {
    const repeat = carrito.some(
      (cursoEnCarrito) => cursoEnCarrito.id === curso.id
    );
    if (repeat) {
      console.log("El curso ya está en el carrito");
    } else {
      carrito.push({
        id: curso.id,
        img: curso.img,
        nombre: curso.nombre,
        precio: curso.precio,
        cantidad: curso.cantidad,
      });
  
      console.log("Curso agregado al carrito");
      console.log(carrito);
      carritoCounter();
      saveLocal();
    }
   
  });
});

// set item
const saveLocal = () => {
localStorage.setItem("carrito",JSON.stringify (carrito));
};
// get item 
JSON.parse(localStorage.getItem("carrito"));
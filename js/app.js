
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getCursos = async () => {
  try {
    const response = await fetch("../../cursos.json");
    const cursos = await response.json();
    console.log(cursos);
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
          Swal.fire({
            icon: 'info',
            title: 'Curso en el carrito',
            text: 'El curso ya está en el carrito',
            timer: 1500,
            showConfirmButton: false, 
            timerProgressBar: true,
            customClass: {
              container: 'my-swal-container',
              title: 'my-swal-title',
              text: 'my-swal-text',
              icon: 'my-swal-icon',
            },
          });
          
        } else {
          carrito.push({
            id: curso.id,
            img: curso.img,
            nombre: curso.nombre,
            precio: curso.precio,
            cantidad: curso.cantidad,
          });

          Swal.fire({
            icon: 'success',
            title: 'Curso agregado',
            text: 'El curso ha sido agregado al carrito',
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true,
            customClass: {
              container: 'my-swal-container',
              title: 'my-swal-title',
              text: 'my-swal-text',
              icon: 'my-swal-icon',
            },
          });
          console.log(carrito);
          carritoCounter();
          saveLocal();
        }
      });
    });
  } catch (error) {
    Swal.fire({
      icon: 'info',
      title: 'No se pudo mostrar los Cursos',
      text: 'Es sumamente importante abrirlo desde Live Server', error
    });
    
  }
};

getCursos();

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("carrito"));




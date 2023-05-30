const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `<h2 class="modal-header-title">Carrito.</h2>`;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h2");
  modalbutton.innerText = "X";
  modalbutton.className = "modal-header-button";

  modalHeader.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
  modalHeader.append(modalbutton);

  carrito.forEach((curso) => {
    let carritoContent = document.createElement("div");
    carrito.className = "modal-content";
    carritoContent.innerHTML = `
    <img src="${curso.img}"/>
    <h3> ${curso.nombre}</h3>
    <p>${curso.precio} $</p>
    <p>cantidad: ${curso.cantidad}</p>
    <span class="delete-curso"> ❌ </span>
    `;

    modalContainer.append(carritoContent);
    console.log(carrito.length);

    let eliminar = carritoContent.querySelector(".delete-curso");
    eliminar.addEventListener("click", () => {
      eliminarCurso(curso.id);
    });
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `total a pagar: ${total} $`;
  modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarCurso = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  carritoCounter();
  saveLocal();
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
carritoCounter();

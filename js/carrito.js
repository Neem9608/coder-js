const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `<h2 class="modal-header-title">Carrito.</h2>`;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("button");
  modalButton.className = "btn btn-danger modal-header-button";
  modalButton.innerText = "X";
  modalHeader.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
  modalHeader.append(modalButton);

  carrito.forEach((curso) => {
    let carritoContent = document.createElement("div");
    carrito.className = "modal-content";
    carritoContent.innerHTML = `
    <img src="${curso.img}"/>
    <h3> ${curso.nombre}</h3>
    <p>${curso.precio} $</p>
    <p>cantidad: ${curso.cantidad}</p>
    <button class="btn btn-danger delete-curso">Eliminar</button>
    `;
    
    modalContainer.append(carritoContent);

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

  swal
    .fire({
      title: "¿Estás seguro?",
      text: "El curso se eliminará del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    })
    .then((result) => {
      if (result.isConfirmed) {
        carrito = carrito.filter((carritoId) => {
          return carritoId !== foundId;
        });
        carritoCounter();
        saveLocal();
        pintarCarrito();
        swal.fire("Eliminado", "El curso ha sido eliminado del carrito.", "success");
      }
    });
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
carritoCounter();

class Curso {
    constructor(id, nombre, precio, img, descripcion, caracteristicas,cantidad = 1) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
      this.descripcion = descripcion;
      this.caracteristicas = caracteristicas;
      this.cantidad = cantidad;
    }
  }
  
  const cursos = [
    new Curso(1, "Curso de programación web", 50, "../img/desarrolloWeb.jpg", "Aprende a crear sitios web dinámicos y funcionales utilizando las últimas tecnologías web.", [
      "10 lecciones",
      "Acceso de por vida",
      "Certificado de finalización"
    ]),
    new Curso(2, "Curso de diseño gráfico", 30, "../img/disenio.jpg", "Aprende a crear diseños impactantes y profesionales para impresos y digitales.", [
      "8 lecciones",
      "Acceso de por vida",
      "Certificado de finalización"
    ]),
    new Curso(3, "Curso de marketing digital", 100, "../img/marketingDigital.jpg", "Aprende a promocionar tu negocio en línea utilizando técnicas de marketing digital.", [
      "12 lecciones",
      "Acceso de por vida",
      "Certificado de finalización"
    ]),
    new Curso(4, "Curso de trading", 150, "../img/trading.jpg", "Aprende a Invertir en los mercados financieros", [
      "20 lecciones",
      "Acceso de por vida",
      "Certificado de finalización"
    ]),
  ];
  
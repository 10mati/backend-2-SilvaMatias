export default class UserResDTO {
    constructor(user) {
      this.nombre = user.nombre; // Cambiado de 'product.nombre' a 'user.nombre'
      this.correo = user.correo; // Cambiado de 'product.descripcion' a 'user.correo'
      this.fechaRegistro = user.fechaRegistro; // Cambiado de 'product.precio' a 'user.fechaRegistro'
      this.disponibilidad = user.disponibilidad; // Cambiado de 'product.disponibilidad' a 'user.disponibilidad'
      this.date = new Date().toLocaleDateString(); // Mantener la fecha actual
    }
  }
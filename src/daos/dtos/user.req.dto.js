export default class UserReqDTO {
    constructor(user) {
      this.nombre = user.name; // Cambiado de 'product.name' a 'user.name'
      this.correo = user.email; // Añadido para el correo del usuario
      this.contraseña = user.password; // Añadido para la contraseña del usuario
      this.fechaRegistro = user.registrationDate; // Añadido para la fecha de registro
    }
  }
export default class UserReqDTO {
    constructor(user) {
      this.nombre = user.name; 
      this.correo = user.email; 
      this.fechaRegistro = user.registrationDate; 
    }
  }
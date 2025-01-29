export default class UserResDTO {
    constructor(user) {
      this.nombre = user.nombre; 
      this.correo = user.correo; 
      this.fechaRegistro = user.fechaRegistro; 
      this.disponibilidad = user.disponibilidad; 
      this.date = new Date().toLocaleDateString(); 
    }
  }
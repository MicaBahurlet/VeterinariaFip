export class Veterinaria {
  private id: number;
  private nombre: string;
  private direccion: string;

  constructor(nombre: string, direccion: string) {
    this.id = this.generarId();
    this.nombre = nombre;
    this.direccion = direccion;
  }

  private generarId(): number { //se podría usar una interfaz 
    return Math.floor(Math.random() * 10000);
  }
}
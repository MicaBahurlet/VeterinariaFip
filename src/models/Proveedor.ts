export class Proveedor {
    id: number;
    nombre: string;
    telefono: string;
  
    constructor(nombre: string, telefono: string) {
      this.id = Proveedor.generarId();
      this.nombre = nombre;
      this.telefono = telefono;
    }
  
    static generarId(): number {
      return Math.floor(Math.random() * 10000);
    }
}
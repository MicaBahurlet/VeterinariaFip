export class Proveedor {
  private id: number;
  private nombre: string;
  private telefono: string;    //number?
  private categoria: string;

  constructor(nombre: string, telefono: string, categoria: string) {
    this.id = this.generarId();
    this.nombre = nombre;
    this.categoria = categoria;
    this.telefono = telefono;
    
  }

  private generarId(): number {
    return Math.floor(Math.random() * 10000);
  }
}
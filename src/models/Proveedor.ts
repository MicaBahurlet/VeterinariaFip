// export class Proveedor {
//     id: number;
//     nombre: string;
//     telefono: string;
  
//     constructor(nombre: string, telefono: string) {
//       this.id = Proveedor.generarId();
//       this.nombre = nombre;
//       this.telefono = telefono;
//     }
  
//     static generarId(): number {
//       return Math.floor(Math.random() * 10000);
//     }
// }

export class Proveedor {
  id: number;
  nombre: string;
  telefono: string;
  categoria: string;

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
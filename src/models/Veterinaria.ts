// // --- Archivo: Veterinaria.ts ---
// export class Veterinaria {
//     id: number;
//     nombre: string;
//     direccion: string;
  
//     constructor(nombre: string, direccion: string) {
//       this.id = Veterinaria.generarId();
//       this.nombre = nombre;
//       this.direccion = direccion;
//     }
  
//     static generarId(): number {
//       return Math.floor(Math.random() * 10000);
//     }
// }

export class Veterinaria {
  id: number;
  nombre: string;
  direccion: string;

  constructor(nombre: string, direccion: string) {
    this.id = this.generarId();
    this.nombre = nombre;
    this.direccion = direccion;
  }

  private generarId(): number {
    return Math.floor(Math.random() * 10000);
  }
}
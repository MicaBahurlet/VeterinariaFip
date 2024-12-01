// export class Cliente {
//     id: number;
//     nombre: string;
//     telefono: string;
//     vip: boolean;
//     visitas: number;
  
//     constructor(nombre: string, telefono: string, visitas: number = 0) {
//       this.id = Cliente.generarId();
//       this.nombre = nombre;
//       this.telefono = telefono;
//       this.visitas = visitas;
//       this.vip = visitas >= 5;
//     }
  
//     incrementarVisitas(): void {
//       this.visitas++;
//       this.vip = this.visitas >= 5;
//     }
  
//     static generarId(): number {
//       return Math.floor(Math.random() * 10000);
//     }
// }

export class Cliente {
  id: number;
  nombre: string;
  telefono: string;
  vip: boolean;
  visitas: number;

  constructor(nombre: string, telefono: string, visitas: number = 0) {
    this.id = this.generarId();
    this.nombre = nombre;
    this.telefono = telefono;
    this.visitas = visitas;
    this.vip = visitas >= 5;
  }

  incrementarVisitas(): void {
    this.visitas++;
    this.vip = this.visitas >= 5;
  }

  private generarId(): number {
    return Math.floor(Math.random() * 10000);
  }
}
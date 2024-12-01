export class Cliente {
  private id: number;
  private nombre: string;
  private telefono: string;                             //number?
  private vip: boolean;
  private visitas: number;

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

  private generarId(): number {                       //ver duplicado de código
    return Math.floor(Math.random() * 10000);
  }
}
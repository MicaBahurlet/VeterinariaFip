export class Paciente {
    id: number;
    nombre: string;
    especie: string;
    idDuenio: number;
  
    constructor(nombre: string, especie: string, idDuenio: number) {
      this.id = Paciente.generarId();
      this.nombre = nombre;
      this.especie = Paciente.validarEspecie(especie);
      this.idDuenio = idDuenio;
    }
  
    static validarEspecie(especie: string): string {
      return especie.toLowerCase() === 'perro' || especie.toLowerCase() === 'gato' ? especie : 'exotica';
    }
  
    static generarId(): number {
      return Math.floor(Math.random() * 10000);
    }
}
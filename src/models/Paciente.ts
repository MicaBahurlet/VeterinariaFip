export class Paciente {
  private id: number;
  private nombre: string;
  private especie: string;
  private idDuenio: number;

  constructor(nombre: string, especie: string, idDuenio: number) {
    this.id = this.generarId();
    this.nombre = nombre;
    this.especie = this.validarEspecie(especie);
    this.idDuenio = idDuenio;
  }

  private validarEspecie(especie: string): string {                                          //if para validación. usar trim 
    return especie.toLowerCase() === 'perro' || especie.toLowerCase() === 'gato' ? especie : 'exotica';
  }

  private generarId(): number {       //se podría usar una interfaz 
    return Math.floor(Math.random() * 10000);
  }
}
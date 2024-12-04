import * as readlineSync from "readline-sync"; //importamos la librería para leer lo que ingresa el usuario
import { listar, agregar, eliminar, modificar } from "../crud"; //importamos las 4 funciones que utilizan las 4 clases

function gestionarPacientes(): void {
  let salir = false; //condición de corte, sino se reproduce en bucle

  while (!salir) { //Menú que se ve por consola
    console.log("\n=== Gestión de Pacientes ===");
    console.log("1. Listar Pacientes");
    console.log("2. Agregar Paciente");
    console.log("3. Modificar Paciente");
    console.log("4. Eliminar Paciente");
    console.log("5. Volver al menú principal");
    const opcion = readlineSync.questionInt("\nSeleccione una opción: ");

    switch (opcion) {
      case 1: //LISTAR
        listar("pacientes.txt");
        break;
      case 2: //AGREGAR
        const nombre = readlineSync.question("Ingrese el nombre del paciente: ");
        const especie = readlineSync.question("Ingrese la especie del paciente: ");
        const idDuenio = readlineSync.questionInt("Ingrese el ID del dueño: "); 
        const id = Math.floor(Math.random() * 10000);
        //se genera nuevo registro que incluye nombre, especie, id del dueño ingresados por el usuario e id generado aleatoriamente
        //se realiza validacion para ver si es exotica o no
        const nuevoRegistro = `${id},${nombre},${especie.toLowerCase() === "perro" || especie.toLowerCase() === "gato" ? especie : "exotica"},${idDuenio}`;
        agregar("pacientes.txt", nuevoRegistro);
        break;
      case 3: //MODIFICAR 
        listar("pacientes.txt");
        const indexModificar = readlineSync.questionInt("Seleccione el índice a modificar: ");
        const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");   //to do validation nuevoNombre
        const nuevaEspecie = readlineSync.question("Ingrese la nueva especie: ");
        const nuevoIdDuenio = readlineSync.questionInt("Ingrese el nuevo ID del dueño: ");
        const nuevoIdPaciente = Math.floor(Math.random() * 10000);
        //se genera nuevo registro que incluye nombre, especie e id del dueño ingresados por el usuario e id del paciente generado aleatoriamente
        const registroModificado = `${nuevoIdPaciente},${nuevoNombre},${nuevaEspecie.toLowerCase() === "perro" ||  nuevaEspecie.toLowerCase() === "gato" ? nuevaEspecie : "exotica"},${nuevoIdDuenio}`;
        modificar("pacientes.txt", indexModificar, registroModificado); //por parámetro se pasa el archivo en el que se debe modificar el paciente, índice/posición del elemento a modificar y la constante que contiene la nueva información
        break;
      case 4: //ELIMINAR
        listar("pacientes.txt");
        const indexEliminar = readlineSync.questionInt("Seleccione el índice a eliminar: ");
        eliminar("pacientes.txt", indexEliminar);
        break;
      case 5:
        salir = true;
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
    }
  }
}

export { gestionarPacientes };

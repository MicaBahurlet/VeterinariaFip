import * as readlineSync from "readline-sync";
import { listar, agregar, eliminar, modificar } from "../crud";

function gestionarPacientes(): void {
  let salir = false;

  while (!salir) {
    console.log("\n=== Gestión de Pacientes ===");
    console.log("1. Listar Pacientes");
    console.log("2. Agregar Paciente");
    console.log("3. Modificar Paciente");
    console.log("4. Eliminar Paciente");
    console.log("5. Volver al menú principal");
    const opcion = readlineSync.questionInt("\nSeleccione una opción: ");

    switch (opcion) {
      case 1:
        listar("pacientes.txt");
        break;
      case 2:
        const nombre = readlineSync.question(
          "Ingrese el nombre del paciente: "
        );
        const especie = readlineSync.question(
          "Ingrese la especie del paciente: "
        );
        const idDuenio = readlineSync.questionInt("Ingrese el ID del dueño: ");
        //validacion para ver si es exotica o no
        const nuevoRegistro = `${Math.floor(Math.random() * 10000)},${nombre},${
          especie.toLowerCase() === "perro" || especie.toLowerCase() === "gato"
            ? especie
            : "exotica"
        },${idDuenio}`;
        agregar("pacientes.txt", nuevoRegistro);
        break;
      case 3:
        listar("pacientes.txt");
        const indexModificar = readlineSync.questionInt(
          "Seleccione el índice a modificar: "
        );
        const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
        const nuevaEspecie = readlineSync.question(
          "Ingrese la nueva especie: "
        );
        const nuevoIdDuenio = readlineSync.questionInt(
          "Ingrese el nuevo ID del dueño: "
        );
        const registroModificado = `${Math.floor(
          Math.random() * 10000
        )},${nuevoNombre},${
          nuevaEspecie.toLowerCase() === "perro" ||
          nuevaEspecie.toLowerCase() === "gato"
            ? nuevaEspecie
            : "exotica"
        },${nuevoIdDuenio}`;
        modificar("pacientes.txt", indexModificar, registroModificado);
        break;
      case 4:
        listar("pacientes.txt");
        const indexEliminar = readlineSync.questionInt(
          "Seleccione el índice a eliminar: "
        );
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

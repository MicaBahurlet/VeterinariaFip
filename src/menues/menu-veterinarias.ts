import * as readlineSync from "readline-sync";
import { listar, agregar, eliminar, modificar } from "../crud";

function gestionarVeterinarias(): void {
  let salir = false;

  while (!salir) {
    console.log("\n=== Gestión de Sucursales ===");
    console.log("1. Listar Veterinarias");
    console.log("2. Agregar Veterinaria");
    console.log("3. Modificar Veterinaria");
    console.log("4. Eliminar Veterinaria");
    console.log("5. Volver al menú principal");
    const opcion = readlineSync.questionInt("\nSeleccione una opción: ");

    switch (opcion) {
      case 1:
        listar("veterinarias.txt");
        break;
      case 2:
        const nombre = readlineSync.question(
          "Ingrese el nombre de la veterinaria: "
        );
        const direccion = readlineSync.question("Ingrese la dirección: ");
        const nuevoRegistro = `${Math.floor(
          Math.random() * 10000
        )},${nombre},${direccion}`;
        agregar("veterinarias.txt", nuevoRegistro);
        break;
      case 3:
        listar("veterinarias.txt");
        const indexModificar = readlineSync.questionInt(
          "Seleccione el índice a modificar: "
        );
        const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
        const nuevaDireccion = readlineSync.question(
          "Ingrese la nueva dirección: "
        );
        const registroModificado = `${Math.floor(
          Math.random() * 10000
        )},${nuevoNombre},${nuevaDireccion}`;
        modificar("veterinarias.txt", indexModificar, registroModificado);
        break;
      case 4:
        listar("veterinarias.txt");
        const indexEliminar = readlineSync.questionInt(
          "Seleccione el índice a eliminar: "
        );
        eliminar("veterinarias.txt", indexEliminar);
        break;
      case 5:
        salir = true;
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
    }
  }
}

export { gestionarVeterinarias };

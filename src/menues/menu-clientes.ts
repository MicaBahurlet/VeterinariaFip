import * as readlineSync from "readline-sync";
import { listar, agregar, eliminar, modificar } from "../crud";

function gestionarClientes(): void {
  let salir = false;

  while (!salir) {
    console.log("\n=== Gestión de Clientes ===");
    console.log("1. Listar Clientes");
    console.log("2. Agregar Cliente");
    console.log("3. Modificar Cliente");
    console.log("4. Eliminar Cliente");
    console.log("5. Volver al menú principal");
    const opcion = readlineSync.questionInt("\nSeleccione una opción: ");

    switch (opcion) {
      case 1:
        listar("clientes.txt");
        break;
      case 2:
        const nombre = readlineSync.question("Ingrese el nombre del cliente: ");
        const telefono = readlineSync.question(
          "Ingrese el teléfono del cliente: "
        );
        const visitas = readlineSync.questionInt(
          "Ingrese el número de visitas (0 por defecto): "
        );
        const nuevoRegistro = `${Math.floor(
          Math.random() * 10000
        )},${nombre},${telefono},${visitas},${visitas >= 5}`;
        agregar("clientes.txt", nuevoRegistro);
        break;
      case 3:
        listar("clientes.txt");
        const indexModificar = readlineSync.questionInt(
          "Seleccione el índice a modificar: "
        );
        const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
        const nuevoTelefono = readlineSync.question(
          "Ingrese el nuevo teléfono: "
        );
        const nuevasVisitas = readlineSync.questionInt(
          "Ingrese el nuevo número de visitas: "
        );
        const registroModificado = `${Math.floor(
          Math.random() * 10000
        )},${nuevoNombre},${nuevoTelefono},${nuevasVisitas},${
          nuevasVisitas >= 5
        }`;
        modificar("clientes.txt", indexModificar, registroModificado);
        break;
      case 4:
        listar("clientes.txt");
        const indexEliminar = readlineSync.questionInt(
          "Seleccione el índice a eliminar: "
        );
        eliminar("clientes.txt", indexEliminar);
        break;
      case 5:
        salir = true;
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
    }
  }
}

export { gestionarClientes };

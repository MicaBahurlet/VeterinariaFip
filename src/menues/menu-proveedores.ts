import * as readlineSync from "readline-sync";
import { listar, agregar, eliminar, modificar } from "../crud";

function gestionarProveedores(): void {
  let salir = false;

  while (!salir) {
    console.log("\n=== Gestión de Proveedores ===");
    console.log("1. Listar Proveedores");
    console.log("2. Agregar Proveedor");
    console.log("3. Modificar Proveedor");
    console.log("4. Eliminar Proveedor");
    console.log("5. Volver al menú principal");
    const opcion = readlineSync.questionInt("\nSeleccione una opción: ");

    switch (opcion) {
      case 1:
        listar("proveedores.txt");
        break;
      case 2:
        const nombre = readlineSync.question(
          "Ingrese el nombre del proveedor: "
        );
        const categoria = readlineSync.question(
          "Ingrese categoria del proveedor: "
        );
        const telefono = readlineSync.question(
          "Ingrese el teléfono del proveedor: "
        );
        const nuevoRegistro = `${Math.floor(
          Math.random() * 10000
        )},${nombre},${telefono}, ${categoria}`;
        agregar("proveedores.txt", nuevoRegistro);
        break;
      case 3:
        listar("proveedores.txt");
        const indexModificar = readlineSync.questionInt(
          "Seleccione el índice a modificar: "
        );
        const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
        const nuevoTelefono = readlineSync.question(
          "Ingrese el nuevo teléfono: "
        );

        const registroModificado = `${Math.floor(
          Math.random() * 10000
        )},${nuevoNombre},${nuevoTelefono}`;
        modificar("proveedores.txt", indexModificar, registroModificado);
        break;
      case 4:
        listar("proveedores.txt");
        const indexEliminar = readlineSync.questionInt(
          "Seleccione el índice a eliminar: "
        );
        eliminar("proveedores.txt", indexEliminar);
        break;
      case 5:
        salir = true;
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
    }
  }
}

export { gestionarProveedores };

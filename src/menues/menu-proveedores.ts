import * as readlineSync from "readline-sync"; //importamos la librería para leer lo que ingresa el usuario
import { listar, agregar, eliminar, modificar } from "../crud"; //importamos las 4 funciones que utilizan las 4 clases

function gestionarProveedores(): void {
  let salir = false; //condición de corte, sino se reproduce en bucle

  while (!salir) { //Menú que se ve por consola
    console.log("\n=== Gestión de Proveedores ===");
    console.log("1. Listar Proveedores");
    console.log("2. Agregar Proveedor");
    console.log("3. Modificar Proveedor");
    console.log("4. Eliminar Proveedor");
    console.log("5. Volver al menú principal");
    const opcion = readlineSync.questionInt("\nSeleccione una opción: ");

    switch (opcion) {
      case 1: //LISTAR
        listar("proveedores.txt");
        break;
      case 2: //AGREGAR
        const nombre = readlineSync.question("Ingrese el nombre del proveedor: ");
        const categoria = readlineSync.question("Ingrese categoria del proveedor: ");
        const telefono = readlineSync.question("Ingrese el teléfono del proveedor: ");
        const id = Math.floor(Math.random() * 1000);
        const nuevoRegistro = `${id},${nombre},${telefono}, ${categoria}`; //se genera nuevo registro que incluye nombre, telefono y categoría ingresados por el usuario e id generado aleatoriamente
        agregar("proveedores.txt", nuevoRegistro); //por parámetro se pasa el archivo en el que se debe agregar el nuevo proveedor y la constante que contiene su información
        break;
      case 3: //MODIFICAR 
        listar("proveedores.txt");
        const indexModificar = readlineSync.questionInt("Seleccione el índice a modificar: ");
        const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
        const nuevoTelefono = readlineSync.question("Ingrese el nuevo teléfono: ");
        const nuevoId = Math.floor(Math.random() * 1000);
        const registroModificado = `${nuevoId},${nuevoNombre},${nuevoTelefono}`;
        modificar("proveedores.txt", indexModificar, registroModificado); //por parámetro se pasa el archivo en el que se debe modificar el proveedor, índice/posición del elemento a modificar y la constante que contiene la nueva información
        break;
      case 4: //ELIMINAR
        listar("proveedores.txt");
        const indexEliminar = readlineSync.questionInt("Seleccione el índice a eliminar: ");
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

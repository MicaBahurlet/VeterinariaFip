import * as readlineSync from "readline-sync"; //importamos la librería para leer lo que ingresa el usuario
import { listar, agregar, eliminar, modificar } from "../crud"; //importamos las 4 funciones que utilizan las 4 clases

function gestionarClientes(): void {
  let salir = false; //condición de corte, sino se reproduce en bucle

  while (!salir) { //Menú que se ve por consola
    console.log("\n=== Gestión de Clientes ===");
    console.log("1. Listar Clientes");
    console.log("2. Agregar Cliente");
    console.log("3. Modificar Cliente");
    console.log("4. Eliminar Cliente");
    console.log("5. Volver al menú principal");
    const opcion = readlineSync.questionInt("\nSeleccione una opción: ");

    switch (opcion) {
      case 1: //LISTAR
        listar("clientes.txt");
        break;
      case 2: //AGREGAR
        const nombre = readlineSync.question("Ingrese el nombre del cliente: ");
        const telefono = readlineSync.question("Ingrese el teléfono del cliente: " );
        const visitas = readlineSync.questionInt("Ingrese el número de visitas (0 por defecto): ");
        const id = Math.floor(Math.random() * 10000);
        const nuevoRegistro = `${id},${nombre},${telefono},${visitas},${visitas >= 5}`; //se genera nuevo registro que incluye nombre, telefono y cantidad de visitas ingresadas por el usuario e id generado aleatoriamente
        agregar("clientes.txt", nuevoRegistro); //por parámetro se pasa el archivo en el que se debe agregar el nuevo cliente y la constante que contiene su información
        break;
      case 3: //MODIFICAR 
        listar("clientes.txt");
        const indexModificar = readlineSync.questionInt("Seleccione el índice a modificar: ");
        const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
        const nuevoTelefono = readlineSync.question("Ingrese el nuevo teléfono: ");
        const nuevasVisitas = readlineSync.questionInt("Ingrese el nuevo número de visitas: ");
        const nuevoId = Math.floor(Math.random() * 10000); 
        const registroModificado = `${nuevoId},${nuevoNombre},${nuevoTelefono},${nuevasVisitas},${nuevasVisitas >= 5}`;
        modificar("clientes.txt", indexModificar, registroModificado); //por parámetro se pasa el archivo en el que se debe modificar el cliente, índice/posición del elemento a modificar y la constante que contiene la nueva información
        break;
      case 4: //ELIMINAR
        listar("clientes.txt");
        const indexEliminar = readlineSync.questionInt("Seleccione el índice a eliminar: ");
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

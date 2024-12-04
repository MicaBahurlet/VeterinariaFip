import * as readlineSync from "readline-sync"; //importamos la librería para leer lo que ingresa el usuario
import { listar, agregar, eliminar, modificar } from "../crud"; //importamos las 4 funciones que utilizan las 4 clases

function gestionarVeterinarias(): void {
  let salir = false; //condición de corte, sino se reproduce en bucle

  while (!salir) {      //Menú que se ve por consola
    console.log("\n=== Gestión de Sucursales ===");
    console.log("1. Listar Veterinarias");
    console.log("2. Agregar Veterinaria");
    console.log("3. Modificar Veterinaria");
    console.log("4. Eliminar Veterinaria");
    console.log("5. Volver al menú principal");
    const opcion = readlineSync.questionInt("\nSeleccione una opción: ");

    switch (opcion) {
      case 1: //LISTAR
        listar("veterinarias.txt");
        break;
      case 2: //AGREGAR
        const nombre = readlineSync.question("Ingrese el nombre de la veterinaria que desea agregar: ");
        const direccion = readlineSync.question("Ingrese la dirección de la veterinaria: ");
        const id = Math.floor(Math.random() * 1000);
        const nuevoRegistro = `${id},${nombre},${direccion}`; //se genera nuevo registro que incluye nombre y dirección ingresados por el usuario e id generado aleatoriamente
        agregar("veterinarias.txt", nuevoRegistro); //por parámetro se pasa el archivo en el que se debe agregar la nueva sucursal y la constante que contiene su información
        break;
      case 3: //MODIFICAR 
        listar("veterinarias.txt");
        const indexModificar = readlineSync.questionInt("Seleccione el índice a modificar: ");
        const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
        const nuevaDireccion = readlineSync.question("Ingrese la nueva dirección: ");
        const nuevoId = Math.floor(Math.random() * 10000);
        const registroModificado = `${nuevoId},${nuevoNombre},${nuevaDireccion}`; 
        modificar("veterinarias.txt", indexModificar, registroModificado); //por parámetro se pasa el archivo en el que se debe modificar la sucursal, índice/posición del elemento a modificar y la constante que contiene la nueva información
        break;
      case 4: //ELIMINAR
        listar("veterinarias.txt");
        const indexEliminar = readlineSync.questionInt("Seleccione el índice a eliminar: ");
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

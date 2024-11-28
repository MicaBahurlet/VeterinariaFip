import * as readlineSync from 'readline-sync';
import { listar, agregar, eliminar, modificar } from './crud';

function mostrarMenuPrincipal(): void {
    console.log("\n=== 👋 Patitas System 🐾 ===");
    console.log("1. Gestionar Sucursales 🏨");
    console.log("2. Gestionar Clientes 👨‍👧‍👧");
    console.log("3. Gestionar Pacientes 🐈");
    console.log("4. Gestionar Proveedores 👩");
    console.log("5. Salir");
}

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
                listar('veterinarias.txt');
                break;
            case 2:
                const nombre = readlineSync.question("Ingrese el nombre de la veterinaria: ");
                const direccion = readlineSync.question("Ingrese la dirección: ");
                const nuevoRegistro = `${Math.floor(Math.random() * 10000)},${nombre},${direccion}`;
                agregar('veterinarias.txt', nuevoRegistro);
                break;
            case 3:
                listar('veterinarias.txt');
                const indexModificar = readlineSync.questionInt("Seleccione el índice a modificar: ");
                const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
                const nuevaDireccion = readlineSync.question("Ingrese la nueva dirección: ");
                const registroModificado = `${Math.floor(Math.random() * 10000)},${nuevoNombre},${nuevaDireccion}`;
                modificar('veterinarias.txt', indexModificar, registroModificado);
                break;
            case 4:
                listar('veterinarias.txt');
                const indexEliminar = readlineSync.questionInt("Seleccione el índice a eliminar: ");
                eliminar('veterinarias.txt', indexEliminar);
                break;
            case 5:
                salir = true;
                break;
            default:
                console.log("Opción inválida. Intente nuevamente.");
        }
    }
}

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
                listar('clientes.txt');
                break;
            case 2:
                const nombre = readlineSync.question("Ingrese el nombre del cliente: ");
                const telefono = readlineSync.question("Ingrese el teléfono del cliente: ");
                const visitas = readlineSync.questionInt("Ingrese el número de visitas (0 por defecto): ");
                const nuevoRegistro = `${Math.floor(Math.random() * 10000)},${nombre},${telefono},${visitas},${visitas >= 5}`;
                agregar('clientes.txt', nuevoRegistro);
                break;
            case 3:
                listar('clientes.txt');
                const indexModificar = readlineSync.questionInt("Seleccione el índice a modificar: ");
                const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
                const nuevoTelefono = readlineSync.question("Ingrese el nuevo teléfono: ");
                const nuevasVisitas = readlineSync.questionInt("Ingrese el nuevo número de visitas: ");
                const registroModificado = `${Math.floor(Math.random() * 10000)},${nuevoNombre},${nuevoTelefono},${nuevasVisitas},${nuevasVisitas >= 5}`;
                modificar('clientes.txt', indexModificar, registroModificado);
                break;
            case 4:
                listar('clientes.txt');
                const indexEliminar = readlineSync.questionInt("Seleccione el índice a eliminar: ");
                eliminar('clientes.txt', indexEliminar);
                break;
            case 5:
                salir = true;
                break;
            default:
                console.log("Opción inválida. Intente nuevamente.");
        }
    }
}

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
              listar('pacientes.txt');
              break;
          case 2:
              const nombre = readlineSync.question("Ingrese el nombre del paciente: ");
              const especie = readlineSync.question("Ingrese la especie del paciente: ");
              const idDuenio = readlineSync.questionInt("Ingrese el ID del dueño: ");
              const nuevoRegistro = `${Math.floor(Math.random() * 10000)},${nombre},${especie.toLowerCase() === 'perro' || especie.toLowerCase() === 'gato' ? especie : 'exotica'},${idDuenio}`;
              agregar('pacientes.txt', nuevoRegistro);
              break;
          case 3:
              listar('pacientes.txt');
              const indexModificar = readlineSync.questionInt("Seleccione el índice a modificar: ");
              const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
              const nuevaEspecie = readlineSync.question("Ingrese la nueva especie: ");
              const nuevoIdDuenio = readlineSync.questionInt("Ingrese el nuevo ID del dueño: ");
              const registroModificado = `${Math.floor(Math.random() * 10000)},${nuevoNombre},${nuevaEspecie.toLowerCase() === 'perro' || nuevaEspecie.toLowerCase() === 'gato' ? nuevaEspecie : 'exotica'},${nuevoIdDuenio}`;
              modificar('pacientes.txt', indexModificar, registroModificado);
              break;
          case 4:
              listar('pacientes.txt');
              const indexEliminar = readlineSync.questionInt("Seleccione el índice a eliminar: ");
              eliminar('pacientes.txt', indexEliminar);
              break;
          case 5:
              salir = true;
              break;
          default:
              console.log("Opción inválida. Intente nuevamente.");
      }
  }
}

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
              listar('proveedores.txt');
              break;
          case 2:
              const nombre = readlineSync.question("Ingrese el nombre del proveedor: ");
              const telefono = readlineSync.question("Ingrese el teléfono del proveedor: ");
              const nuevoRegistro = `${Math.floor(Math.random() * 10000)},${nombre},${telefono}`;
              agregar('proveedores.txt', nuevoRegistro);
              break;
          case 3:
              listar('proveedores.txt');
              const indexModificar = readlineSync.questionInt("Seleccione el índice a modificar: ");
              const nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
              const nuevoTelefono = readlineSync.question("Ingrese el nuevo teléfono: ");
              const registroModificado = `${Math.floor(Math.random() * 10000)},${nuevoNombre},${nuevoTelefono}`;
              modificar('proveedores.txt', indexModificar, registroModificado);
              break;
          case 4:
              listar('proveedores.txt');
              const indexEliminar = readlineSync.questionInt("Seleccione el índice a eliminar: ");
              eliminar('proveedores.txt', indexEliminar);
              break;
          case 5:
              salir = true;
              break;
          default:
              console.log("Opción inválida. Intente nuevamente.");
      }
  }
}

function main(): void {
    let salir = false;

    while (!salir) {
        mostrarMenuPrincipal();
        const opcion = readlineSync.questionInt("\nSeleccione una opción: ");

        switch (opcion) {
            case 1:
                gestionarVeterinarias();
                break;
            case 2:
                gestionarClientes();
                break;
            case 3:
                gestionarPacientes();
                break;
            case 4:
                gestionarProveedores();
                break;
            case 5:
                salir = true;
                console.log("Saliendo de Patitas System 🐾...👋 Hasta pronto!");
                break;
            default:
                console.log("Opción inválida. Seleccione un numero de la pantalla.");
        }
    }
}

main();

import * as readlineSync from 'readline-sync';

import { mostrarMenuPrincipal } from './menues/menu-principal';
import { gestionarVeterinarias } from './menues/menu-veterinarias';
import { gestionarClientes } from './menues/menu-clientes';
import { gestionarPacientes } from './menues/menu-pacientes';
import { gestionarProveedores } from './menues/menu-proveedores';

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
                console.log("🐾 Saliendo de Patitas System...👋 Hasta pronto!");
                break;
            default:
                console.log("Opción inválida. Seleccione un numero de la pantalla.");
        }
    }
}

main();
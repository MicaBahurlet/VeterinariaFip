import * as readlineSync from 'readline-sync';

function mostrarMenuPrincipal(): void {
    console.log("\n=== 👋 Patitas System 🐾 ===");
    console.log("1. 🏨 Gestionar Sucursales");
    console.log("2. 🧑 Gestionar Clientes");
    console.log("3. 🐈 Gestionar Pacientes ");
    console.log("4. 👩 Gestionar Proveedores ");
    console.log("5. Salir");
}

export { mostrarMenuPrincipal };
import * as fs from 'fs';
import * as path from 'path';

//para listar, ruta relativa de la info 
export function listar(fileName: string): void {
    try {
        const filePath = path.join(__dirname, `../src/data/${fileName}`);
        // console.log(`Leyendo archivo desde: ${filePath}`);  
        const data = fs.readFileSync(filePath, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        if (lines.length === 0) {
            console.log("No hay datos para mostrar.");
        } else {
            console.log("\n=== Lista de datos ===");
            lines.forEach((line, index) => {
                console.log(`${index + 1}. ${line}`);
            });
        }
    } catch (error) {
        console.log(`Error al leer el archivo: ${fileName}`);
    }
}

// agregar registro
export function agregar(fileName: string, nuevoRegistro: string): void {
    try {
        const filePath = path.join(__dirname, `../src/data/${fileName}`);
        fs.appendFileSync(filePath, nuevoRegistro + '\n');
        console.log("Registro agregado correctamente.");
    } catch (error) {
        console.log(`Error al agregar el registro: ${error.message}`);
    }
}

//eliminar
export function eliminar(fileName: string, index: number): void {
    try {
        const filePath = path.join(__dirname, `../src/data/${fileName}`);
        const data = fs.readFileSync(filePath, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        if (index < 1 || index > lines.length) {
            console.log("Índice inválido. Seleccione un numero de la pantalla");
            return;
        }
        lines.splice(index - 1, 1);
        fs.writeFileSync(filePath, lines.join('\n') + '\n');
        console.log("Registro eliminado correctamente.");
    } catch (error) {
        console.log(`Error al eliminar el registro: ${error.message}`);
    }
}

//modificar
export function modificar(fileName: string, index: number, nuevoRegistro: string): void {
    try {
        const filePath = path.join(__dirname, `../src/data/${fileName}`);
        const data = fs.readFileSync(filePath, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        if (index < 1 || index > lines.length) {
            console.log("Índice inválido.Seleccione un numero de la pantalla");
            return;
        }
        lines[index - 1] = nuevoRegistro;
        fs.writeFileSync(filePath, lines.join('\n') + '\n');
        console.log("Registro modificado correctamente.");
    } catch (error) {
        console.log(`Error al modificar el registro: ${error.message}`);
    }
}

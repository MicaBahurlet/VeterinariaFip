//CRUD: CREATE, READ, UPDATE and DELETE
import * as fs from 'fs'; //importamos módulo File System para la manipulación de los archivos .txt
import * as path from 'path';

//LISTAR
export function listar(fileName: string): void {
    try {
        const filePath = path.join(__dirname, `../src/data/${fileName}`); //ruta relativa de la info 
        const data = fs.readFileSync(filePath, 'utf-8'); //leer información del archivo .txt
        const lines = data.split('\n').filter(line => line.trim() !== '');  //dividimos el archivo en lineas (split) y luego filtramos y eliminamos los espacios en blanco (filter). "\n":salto de línea
        if (lines.length === 0) { //en caso de que no haya información
            console.log("No hay datos para mostrar.");
        } else {    //en caso de que haya información, recorre línea por línea y las va mostrando
            console.log("\n=== Lista de datos ===");
            lines.forEach((line, index) => {
                console.log(`${index + 1}. ${line}`);
            });
        }
    } catch (error) {
        console.log(`Error al leer el archivo: ${fileName}`);
    }
}

//AGREGAR
export function agregar(fileName: string, nuevoRegistro: string): void {
    try {
        const filePath = path.join(__dirname, `../src/data/${fileName}`);
        fs.appendFileSync(filePath, nuevoRegistro + '\n');
        console.log("Registro agregado correctamente.");
    } catch (error) {
        console.log(`Error al agregar el registro: ${error.message}`);
    }
}

//ELIMINAR
export function eliminar(fileName: string, index: number): void {
    try {
        const filePath = path.join(__dirname, `../src/data/${fileName}`);
        const data = fs.readFileSync(filePath, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        if (index < 1 || index > lines.length) {
            console.log("Índice inválido. Seleccione un numero de la pantalla");
            return;
        }
        lines.splice(index - 1, 1); //splice(posición, cantidad)."-1" porque los arrays arrancan desde la posición 0 y "1" por la cantidad de elementos que queremos borrar 
        fs.writeFileSync(filePath, lines.join('\n') + '\n');
        console.log("Registro eliminado correctamente.");
    } catch (error) {
        console.log(`Error al eliminar el registro: ${error.message}`);
    }
}

//MODIFICAR
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

<h1>Patitas System 🐾</h1>
<h3>Trabajo Integrador FIP -Segundo cuatrimestre</h3>
<p>Sistema CLI de gestión para una red de veterinarias. En este sistema se podrán visualizar clientes, pacientes, proveedores e información de cada sucursal asociada a la red. <br> Además, en caso de requerirlo, se podrá visualizar los datos, modificarlos y eliminarlos.</p>

### Correr en consola

1. Compilar el ts - lo configuramos en /dist
   ```bash
   npx tsc
2. Ejecutar el programa desde la consola: 
   ```bash
   node dist/main.js
<hr>


## Instalación en local
1. Clona el repositorio:
   ```bash
   git clone https://github.com/MicaBahurlet/VeterinariaFip.git
2. Instalar las dependencias:
   ```bash
   npm install
3. Actualizar repo local en base a remoto:
   ```bash
   git pull origin main
<hr>
<h3>Consigna de trabajo: </h3>
 
Nuestro cliente es una red de veterinarias y 
desea poder acceder a la siguiente información

- Sucursales de Veterinarias
- Clientes
- Pacientes (mascotas)
- Proveedores

Más info: 
-  Veterinarias: nombre, dirección, id (un número 
generado  aleatoriamente  al  momento  del  alta) 
La red debe tener la posibilidad de dar de alta, 
modificar datos o dar de baja las mismas.
-  Clientes:  nombre,  teléfono,  si  es  VIP  (cliente 
recurrente, en el cual se guarda el número de 
visitas e incrementarlo cada vez que se realiza 
una y para ser VIP tiene que tener 5 o mas) y un 
id  (generado  igual  que  los  anteriores),  las 
veterinarias deben contar con la opción de alta, 
baja y modificación de los mismos.
CFS
-  Pacientes (mascotas): nombre, especie (si no es 
perro o gato, deberá registrarse como exótica), id 
del  dueño,  las  veterinarias  deben  contar  con  la 
opción de alta, baja y modificación de los mismos.
-  Proveedores: nombre, teléfono  y un id  generado 
como los otros la red debe contar con la opción de 
alta, baja y modificación de los mismos.

IMPORTANTE:  los  id  deben  ser  únicos,  por  lo  tanto  al 
generarse,  antes  de  guardarlos  se  debe  validar  que  no 
exista. Si ya existe se debe volver a generar.

Fecha de entrega: 4 de diciembre
# Backend de Supermercado

## Integrantes
- Diego Alejandro Granada

## Descripción del Proyecto
Este proyecto consiste en el desarrollo de una API REST para la gestión de un supermercado, implementando arquitectura MVC utilizando Node.js, Express y PostgreSQL.

El sistema permite administrar:
- Productos
- Proveedores
- Usuarios

Cada entidad cuenta con operaciones CRUD completas y relaciones definidas mediante Sequelize ORM.

## Arquitectura

El proyecto sigue el patrón MVC:

### Model
- Definición de modelos con Sequelize
- Representación de entidades en base de datos

### Controller
- Lógica de negocio
- Manejo de peticiones HTTP

### View
- Respuestas en formato JSON
- Consumo desde cliente (Postman)


## Tecnologías utilizadas

- JavaScript (Node.js)
- Express.js
- PostgreSQL
- Sequelize ORM


## Relaciones implementadas

- Un proveedor tiene muchos productos
- Un producto pertenece a un proveedor


## Instrucciones de ejecución

1. Instalar dependencias:

```bash
npm install

2. Configurar la conexión a la base de datos PostgreSQL en el archivo:
src/config/database.js

(Tener la base de datos en postgres ya que me paso que ejecute sin crearla, estuve peleando con el error, pero lo solucione pgAdmin 4 creando la base de datos "supermercado")

3. Ejecutar el servidor:

npm start

4.El servidor se iniciará en:

http://localhost:3000

5. Probar los endpoints utilizando Postman o cualquier cliente HTTP.

## Ejemplos de Endpoints

### Productos

## Obtener todos los productos
GET http://localhost:3000/api/products

## Obtener producto por ID
GET http://localhost:3000/api/products/1

## Crear producto
POST `http://localhost:3000/api/products`

```json
{
  "name": "Arroz",
  "description": "1kg",
  "price": 3250,
  "stock": 10,
  "providerId": 1
}

## Actualizar producto

PUT http://localhost:3000/api/products/1

{
  "name": "Arroz",
  "description": "1kg",
  "price": 3000,
  "stock": 15,
  "providerId": 1
}

## Eliminar producto 

DELETE http://localhost:3000/api/products/1

### Usuarios 

## Obtener todos los usuarios

GET http://localhost:3000/api/users

## Crear usuario

POST http://localhost:3000/api/users

{
  "name": "Diego",
  "email": "diegogr@test.com",
  "role": "admin"
}

## Obtener usuario por ID

GET http://localhost:3000/api/users/1

## Actualizar usuario

PUT http://localhost:3000/api/users/1

{
  "name": "Diego GranadaT",
  "email": "diegot@test.com",
  "role": "admin"
}

## Eliminar usuario

DELETE http://localhost:3000/api/users/1

### Proveedores

## Obtener todos los proveedores

GET http://localhost:3000/api/providers

## Crear proveedor

POST http://localhost:3000/api/providers

{
  "name": "Proveedor 1",
  "phone": "123456",
  "email": "prov@test.com",
  "city": "Bogota"
}

## Obtener proveedor por ID

GET http://localhost:3000/api/providers/1

## Actualizar proveedor

PUT http://localhost:3000/api/providers/1

{
  "name": "Proveedor actualizado",
  "phone": "999999",
  "email": "prov@test.com",
  "city": "Medellin"
}

## Eliminar proveedor

DELETE http://localhost:3000/api/providers/1

## Arquitectura MVC

El proyecto sigue una arquitectura MVC estricta:

- **Model:** Definición de entidades usando Sequelize
- **Controller:** Manejo de lógica de negocio y endpoints
- **View:** Respuestas en formato JSON


## Validaciones implementadas

- Precio de productos mayor a 0
- Stock de productos no negativo
- Email de usuario único
- Relación entre productos y proveedores


## Pruebas

Las pruebas fueron realizadas utilizando Postman, verificando todos los endpoints CRUD.


## Estado del proyecto

API completamente funcional  
CRUD completo en todas las entidades  
Conexión a PostgreSQL estable  
Arquitectura MVC implementada correctamente  
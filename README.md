# Backend de Supermercado

## Integrantes

* Diego Alejandro Granada

## Descripción del Proyecto

API REST para la gestión de un supermercado usando arquitectura MVC con Node.js, Express y PostgreSQL.

Permite administrar:

* Productos
* Proveedores
* Usuarios

## Arquitectura MVC

### Model

* Modelos con Sequelize
* Representación de base de datos

### Controller

* Lógica de negocio
* Manejo de endpoints

### View

* Respuestas en JSON
* Consumo con Postman

## Tecnologías

* Node.js
* Express.js
* PostgreSQL
* Sequelize


## Relaciones

* Un proveedor tiene muchos productos
* Un producto pertenece a un proveedor


## Instrucciones de ejecución

### 1. Instalar dependencias

bash
npm install


### 2. Configurar base de datos

Editar:


src/config/database.js


(Tener la base de datos en postgres ya que me paso que ejecute sin crearla, estuve peleando con el error, pero lo solucione pgAdmin 4 creando la base de datos "supermercado")


### 3. Ejecutar servidor

```bash
npm start
```


### 4. URL del servidor

http://localhost:3000

### 5. Probar API

Usar Postman o cualquier cliente HTTP.

## Endpoints

### Productos

#### Obtener todos

GET http://localhost:3000/api/products

#### Obtener por ID

GET http://localhost:3000/api/products/1

#### Crear

```json
POST http://localhost:3000/api/products

{
  "name": "Arroz",
  "description": "1kg",
  "price": 3250,
  "stock": 10,
  "providerId": 1
}
```

#### Actualizar

```json
PUT http://localhost:3000/api/products/1

{
  "name": "Arroz",
  "description": "1kg",
  "price": 3000,
  "stock": 15,
  "providerId": 1
}
```

#### Eliminar

DELETE http://localhost:3000/api/products/1

### Usuarios

#### Obtener todos

GET http://localhost:3000/api/users

#### Crear

```json
POST http://localhost:3000/api/users

{
  "name": "Diego",
  "email": "diegogr@test.com",
  "role": "admin"
}
```

#### Obtener por ID

GET http://localhost:3000/api/users/1

#### Actualizar

```json
PUT http://localhost:3000/api/users/1

{
  "name": "Diego GranadaT",
  "email": "diegot@test.com",
  "role": "admin"
}
```

#### Eliminar

DELETE http://localhost:3000/api/users/1


### Proveedores

#### Obtener todos

GET http://localhost:3000/api/providers

#### Crear

```json
POST http://localhost:3000/api/providers

{
  "name": "Proveedor 1",
  "phone": "123456",
  "email": "prov@test.com",
  "city": "Bogota"
}
```

#### Obtener por ID

GET http://localhost:3000/api/providers/1

#### Actualizar

```json
PUT http://localhost:3000/api/providers/1

{
  "name": "Proveedor actualizado",
  "phone": "999999",
  "email": "prov@test.com",
  "city": "Medellin"
}
```

#### Eliminar

DELETE http://localhost:3000/api/providers/1

## Validaciones

* Precio > 0
* Stock ≥ 0
* Email único
* Relación producto-proveedor


## Pruebas

Realizadas con Postman verificando todos los endpoints.

## Estado del proyecto

✔ API funcional
✔ CRUD completo
✔ PostgreSQL conectado
✔ Arquitectura MVC correcta

# Abacus-test

### How to run the app

1. First in your MYSQL Terminal or in your Database Management System create a database using the following commnands:

```sql
-- 1. Create Database

CREATE DATABASE IF NOT EXISTS abacustest;


-- 2. Select the database

use abacustest;

-- 3. Create the table which will contain the posts

CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    body MEDIUMTEXT NOT NULL
);

```

2. In the root of your project, create a _.env_ file containing the following variables of your database.

```
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=database_password
DB_PORT=database_port

```

You can also see the example.env for more info

3. Once your Database is connected, install the necessary packages to run the project:

```
- npm install (to install the depedencies)
- npm start (to run the server)

```

4. API ENDPOINTS

the api is serve on: localhost:3000/api/v1/posts

- Routes:

```
[GET] /
- To get all the posts

[GET] /export
-  To download the posts as CSV file

```

Note: The CSV files are created in a folder called _downloads_, if you did not see it don't worry, the first time you'll use the endpoint it will created automatically.

<details>
    <summary>Descripción de la Tarea</summary>

    Tu tarea es crear una pequeña aplicación en Node.js que realice las siguientes operaciones:

    Interacción con API: Realiza una solicitud GET al siguiente endpoint de la API para obtener todos los posts: https://jsonplaceholder.typicode.com/posts

    Almacenamiento en Base de Datos: Guarda los posts recibidos en una base de datos MySQL local. Deberás diseñar la(s) tabla(s) necesaria(s) para almacenar los datos de forma apropiada.

    Recuperación de Datos y Exportación a CSV: Lee los posts almacenados de tu base de datos MySQL y escríbelos en un archivo CSV. El archivo CSV debe ser guardado en el sistema de archivos local.

    Requisitos:

    Utiliza cualquier framework o librería de Node.js que consideres apropiado.
    Asegúrate de que tu código esté limpio, bien organizado y documentado.
    Incluye un archivo README con instrucciones claras sobre cómo configurar y ejecutar tu aplicación. Esto debe incluir los pasos para configurar el esquema de la base de datos MySQL.

    Entrega:
    Repositorio público en GitHub y enviame el enlace. Además, adjunta el archivo CSV resultante a tu respuesta.

</details>

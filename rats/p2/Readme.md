# Ejercicio Practico nro. 2

## Requisitos previos

- Installar Docker
- Installar Node
- Installar Typescrypt
- Installar ts-node

## Installacion

### Manage Data Server

```bash
$ cd web-server-a
$ npm install
```

### View Data Server

```bash
$ cd web-server-b
$ npm install
```

## Env variables

### Web Server A


- Crear un archivo .env para las variables de entorno en la carpeta web-server-a:
- Agregar los siguientes parámetros (o modificarlos, en caso de tener una configuración de mysl diferente)
    DB_NAME=example1
    DB_USER=root
    DB_PASS=secret
    DB_HOST=localhost
    DB_DIALECT=mysql
    DB_PORT=3306
    DB_SYNC=true

### Web Server B

- Crear un archivo .env para las variables de entorno: en la carpeta web-server-b:

# Configuración de la base de datos MongoDB
MONGO_URI=mongodb://root:secret@localhost:27017/admin

# Puerto en el que se ejecutará el servidor
PORT=3001


## Correr docker para mysql, mongodb y redis

- `cd docker`
- Ejecutar `docker compose up -d` si el container no existe o `docker-compose start -d` si el container ya exister


### Correr Web Server A
```bash
$ cd web-server-a
$ npm start
```

### Correr Web Server B
```bash
$ cd web-server-b
$ npm start
```

### PRUEBAS

En la carpeta postman-collection se encuentra una colección de postman que le pega a ambos servicios:

Existe una pegada para crear un cliente en el servicio A, esto guarda el mismo en MySql y Redis, en el Servicio A, y lo envia por una cola de Bull (redis) hacia el servivio B, el cual lo guarda en una base de Mongo. 

Luego existen pegadas para obtener cliente en ambos servivios
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


## Correr docker para rabbitmq y redis

- `cd docker`
- Ejecutar `docker compose up -d` si el container no existe o `docker-compose start -d` si el container ya exister

## Para ejecutar los repositorios

### Web Server

```bash
$ cd manage-data-server
$ npm start
```

### Data Generator

Aclaracion: Hay que tener el Web Server prendido con antelacion para ejecutar este script

```bash
$ cd view-data-server
$ npm start
```

### Ouput

El resultado de cada persona que atravesiesa el conjunto de validaciones, se imprime tanto en pantalla, como también en el archivo llamado filters.log, dentro del proyecto web-server

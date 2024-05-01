# Ejercicio Practico

## Requisitos previos

- Installar Docker
- Installar Node
- Installar Typescrypt
- Installar ts-node

## Installacion

### Web Server

```bash
$ cd web-server
$ npm install
```

### Data Generator

```bash
$ cd data-generator
$ npm install
```

## Env variables

### Web Server

- Crear un archivo .env para las variables de entorno en la carpeta web-server
- Agregar `QUEUE_TYPE = "BULL"` //esto hace que el pipeline del servicio web-server funcione con una cola de REDIS, en caso de querer usar RABBIT MQ el valor debera ser `"RABBITMQ"`
- Agregar MAX_WORD_LENGTH = "50" // largo máximo permitido para una palabra
- Agregar FILE_LOG_PATH = "filters.log" // archivo donde se guardaran los logs

### Data Generator

- Crear un archivo .env para las variables de entorno en la carpeta data-generator
- NUMBER_OF_WORDS_TO_SEND = "10" // cantidad de palabras a enviar desde el servicio data-genetor

## Correr docker para rabbitmq y redis

- `cd docker`
- Ejecutar `docker compose up -d` si el container no existe o `docker-compose start -d` si el container ya exister

## Para ejecutar los repositorios

### Web Server

```bash
$ cd web-server
$ npm start
```

### Data Generator

Aclaracion: Hay que tener el Web Server prendido con antelacion para ejecutar este script

```bash
$ cd data-generator
$ npm start
```

### Ouput

El resultado de cada persona que atravesiesa el conjunto de validaciones, se imprime tanto en pantalla, como también en el archivo llamado filters.log, dentro del proyecto web-server

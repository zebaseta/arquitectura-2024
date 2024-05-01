# Ejemplo de Productor y Consumidor con Bull y Redis

Este ejemplo muestra cómo configurar y ejecutar una simple cola de trabajos utilizando Bull en Node.js con Redis como backend.

## Requisitos

- Docker
- Node.js
- npm

## Configuración

1. **Levantar el contenedor de Redis:**
   Asegúrate de tener Docker instalado y corriendo en tu sistema. Puedes levantar el servidor de Redis ejecutando el siguiente comando en la raíz de tu proyecto (donde se encuentra el archivo `docker-compose.yml`):

   ```bash
   docker-compose up -d

   ```

1. Instalar dependencias:
   Necesitas instalar las dependencias necesarias para tus scripts de productor y consumidor. Asegúrate de tener un archivo package.json en tu directorio de proyecto y ejecuta:

`npm install bull`

2. Ejecutar los scripts:
   Puedes ejecutar tus scripts de Node.js para el productor y el consumidor como se muestra a continuación:

Para ejecutar el script del productor:

`npx ts-node src/producer.js`

Para ejecutar el script del consumidor:

`npx ts-node src/consumer.js`

Asegúrate de que ambos scripts estén correctamente configurados para apuntar a redis://localhost:6379.

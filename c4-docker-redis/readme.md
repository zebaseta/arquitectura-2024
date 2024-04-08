Arquitectura

### Teoría de Docker

Docker es una plataforma de contenedorización que permite a los desarrolladores empaquetar aplicaciones y sus dependencias en contenedores. Los contenedores son ligeros, portátiles y brindan un entorno consistente para la aplicación, independientemente del entorno de ejecución. Esto simplifica el desarrollo, las pruebas y la implementación.

#### Conceptos clave de Docker:

- **Imágenes de Docker**: Una imagen es una plantilla inmutable que contiene el código, las herramientas de tiempo de ejecución, las bibliotecas y las dependencias necesarias para ejecutar una aplicación. Las imágenes se utilizan para crear contenedores.
- **Contenedores de Docker**: Son instancias en ejecución de imágenes. Un contenedor es un entorno aislado que tiene su propio sistema de archivos, CPU, memoria y espacio en disco, pero comparte el kernel del sistema operativo.
- **Docker Hub**: Es un registro de Docker que almacena imágenes públicas y privadas. Es utilizado por los desarrolladores para subir y descargar imágenes.

La diferencia entre contenedores y máquinas virtuales (VMs) radica en su arquitectura y cómo interactúan con el sistema operativo subyacente. Ambos son tecnologías de virtualización que permiten ejecutar aplicaciones en entornos aislados, pero lo hacen de maneras fundamentalmente distintas.

### Máquinas Virtuales (VMs)

Las máquinas virtuales virtualizan el hardware físico para ejecutar un sistema operativo completo (SO) en cada VM. Esto significa que cada VM incluye no solo la aplicación y sus dependencias, sino también una copia completa del SO, un servidor virtual y otros componentes necesarios. Este enfoque permite una completa aislamiento entre VMs, ya que cada una se ejecuta con su propio kernel del SO.

**Características de las VMs**:

- **Aislamiento completo**: Cada VM es completamente independiente de las demás y del host.
- **Compatibilidad amplia**: Pueden ejecutar casi cualquier sistema operativo.
- **Recursos dedicados**: Se asignan recursos específicos (CPU, memoria, almacenamiento) a cada VM.

**Desventajas**:

- **Uso de recursos**: Requiere más recursos del sistema debido a la necesidad de ejecutar múltiples instancias del sistema operativo.
- **Tiempo de arranque**: Las VMs suelen tardar más en arrancar debido a la necesidad de cargar el SO completo.
- **Gestión de almacenamiento**: Consumen más espacio de almacenamiento.

### Contenedores

Los contenedores virtualizan el sistema operativo en lugar del hardware, lo que significa que todos los contenedores comparten el mismo kernel del SO del host pero pueden tener sus propias bibliotecas, dependencias y aplicaciones. Esto los hace mucho más ligeros y rápidos en comparación con las VMs. Los contenedores son especialmente populares para el desarrollo de aplicaciones, microservicios y despliegues en la nube.

**Características de los Contenedores**:

- **Ligereza**: Al compartir el kernel del SO del host y omitir la necesidad de un SO invitado completo, los contenedores utilizan menos recursos.
- **Inicio rápido**: Pueden iniciarse casi instantáneamente, lo que permite una mayor flexibilidad y eficiencia en operaciones de despliegue y escalado.
- **Eficiencia de recursos**: Menor consumo de CPU, memoria y almacenamiento en comparación con las VMs.

**Desventajas**:

- **Aislamiento menos estricto**: Aunque los contenedores están aislados entre sí y del host, el nivel de aislamiento no es tan robusto como el de las VMs debido a que comparten el mismo kernel del SO.
- **Limitaciones del sistema operativo**: Los contenedores en un host dado deben compartir el mismo kernel del sistema operativo, lo que puede limitar la compatibilidad con diferentes distribuciones o versiones del SO.

### Conclusión

La elección entre contenedores y VMs depende de las necesidades específicas del proyecto. Los contenedores son ideales para aplicaciones que requieren eficiencia, escalabilidad y velocidad, mientras que las VMs son más adecuadas para aplicaciones que necesitan un aislamiento completo o deben ejecutarse en un SO específico. Ambas tecnologías pueden coexistir en el mismo ecosistema, proporcionando soluciones flexibles para una variedad de escenarios de despliegue.

### Teoría de Redis

Redis es una base de datos en memoria, utilizado como base de datos, caché y agente de mensajes. Es conocido por su alta velocidad, dado que los datos se almacenan en la RAM. Redis soporta varios tipos de datos como strings, hashes, listas, sets y sorted sets.

#### Características clave de Redis:

- **Rendimiento**: Al operar en memoria, Redis puede leer y escribir datos a gran velocidad.
- **Estructuras de datos ricas**: Soporta estructuras de datos complejas, lo que lo hace versátil para una amplia gama de aplicaciones.
- **Persistencia**: Ofrece opciones para persistir los datos en disco, permitiendo que los datos no se pierdan después de reiniciar.
- **Replicación y Alta Disponibilidad**: Redis puede replicarse en múltiples nodos para garantizar la disponibilidad y la durabilidad de los datos.

Aquí tienes una lista de comandos básicos de Docker que te serán útiles, especialmente en el contexto de trabajar con una imagen de Redis. Estos comandos te permitirán gestionar imágenes y contenedores, y realizar operaciones comunes como iniciar, detener y conectarte a contenedores de Redis.

### Comandos Básicos de Docker

1. **Buscar Imágenes en Docker Hub**

   - `docker search redis`: Busca imágenes de Redis disponibles en Docker Hub.

2. **Descargar una Imagen de Docker**

   - `docker pull redis`: Descarga la última imagen oficial de Redis de Docker Hub.

3. **Listar Imágenes Disponibles**

   - `docker images`: Muestra un listado de todas las imágenes descargadas en tu sistema.

4. **Ejecutar un Contenedor**

   - `docker run --name mi-redis -d redis`: Ejecuta un contenedor de Redis en modo detenido (background) y lo nombra como `mi-redis`. Si no especificas una versión, `docker run` utilizará la etiqueta `latest`.

5. **Listar Contenedores en Ejecución**

   - `docker ps`: Muestra un listado de todos los contenedores en ejecución.
   - `docker ps -a`: Muestra todos los contenedores, incluso los que están detenidos.

6. **Detener un Contenedor**

   - `docker stop mi-redis`: Detiene el contenedor llamado `mi-redis`.

7. **Iniciar un Contenedor Detenido**

   - `docker start mi-redis`: Inicia el contenedor `mi-redis` si está detenido.

8. **Eliminar un Contenedor**

   - `docker rm mi-redis`: Elimina el contenedor `mi-redis`. Debes detener el contenedor antes de eliminarlo.

9. **Acceder a un Contenedor en Ejecución**

   - `docker exec -it mi-redis redis-cli`: Te conecta al cliente de línea de comandos de Redis dentro del contenedor `mi-redis`. Esto es útil para interactuar directamente con la instancia de Redis.

10. **Ver Logs de un Contenedor**

    - `docker logs mi-redis`: Muestra los logs del contenedor `mi-redis`. Es útil para depurar y verificar la actividad del contenedor.

11. **Eliminar una Imagen**
    - `docker rmi redis`: Elimina la imagen de Redis. Asegúrate de que no haya contenedores en ejecución que utilicen esta imagen.

### Consejos Adicionales

- **Especificar una Versión de Redis**: Puedes especificar una versión de Redis al descargar una imagen, por ejemplo, `docker pull redis:6.0`.
- **Persistencia de Datos**: Para manejar la persistencia de datos con Redis en Docker, puedes usar volúmenes. Por ejemplo, `docker run --name mi-redis -d -v /mi/local/directorio:/data redis` montaría un directorio local en el contenedor para persistir los datos.
- **Configuración Personalizada**: Puedes pasar configuraciones personalizadas a Redis al ejecutar el contenedor, utilizando el comando `docker run` con argumentos adicionales o un archivo de configuración personalizado montado como un volumen.

Estos comandos básicos te darán un buen punto de partida para trabajar con Docker y Redis, permitiéndote manejar tus contenedores y hacer tus primeras pruebas y desarrollos con esta potente base de datos en memoria.

Una vez que estés conectado a tu contenedor de Redis usando `redis-cli`, puedes comenzar a interactuar con la base de datos en memoria ejecutando varios comandos Redis. Redis tiene una amplia gama de comandos que te permiten manipular diferentes tipos de datos, configurar la base de datos y mucho más. Aquí te presento algunos ejemplos básicos para comenzar:

### Ejemplos Básicos de Comandos de Redis

1. **Establecer y Obtener Valores**

   - `SET clave valor`: Establece el valor de una clave.
     ```
     SET mykey "Hello, Redis!"
     ```
   - `GET clave`: Obtiene el valor de una clave.
     ```
     GET mykey
     ```

2. **Eliminar Claves**

   - `DEL clave`: Elimina una o más claves y sus valores.
     ```
     DEL mykey
     ```

3. **Trabajar con Listas**

   - `LPUSH clave valor`: Inserta un valor al inicio de la lista almacenada en una clave.
     ```
     LPUSH mylist "world"
     ```
   - `RPUSH clave valor`: Inserta un valor al final de la lista.
     ```
     RPUSH mylist "hello"
     ```
   - `LPOP clave`: Elimina y obtiene el primer elemento de la lista.
     ```
     LPOP mylist
     ```
   - `RPOP clave`: Elimina y obtiene el último elemento de la lista.
     ```
     RPOP mylist
     ```

4. **Establecer Expiración para Claves**

   - `EXPIRE clave segundos`: Establece un tiempo de vida en segundos para una clave.
     ```
     SET mykey "Hello"
     EXPIRE mykey 10
     ```
   - `TTL clave`: Muestra el tiempo restante de vida (en segundos) de una clave.
     ```
     TTL mykey
     ```

5. **Trabajar con Hashes**

   - `HSET clave campo valor`: Establece el valor de un campo en un hash.
     ```
     HSET myhash field1 "Hello"
     ```
   - `HGET clave campo`: Obtiene el valor de un campo en un hash.
     ```
     HGET myhash field1
     ```
   - `HDEL clave campo`: Elimina uno o más campos de un hash.
     ```
     HDEL myhash field1
     ```

6. **Incrementar y Decrementar Valores**

   - `INCR clave`: Incrementa el número almacenado en una clave en uno.
     ```
     SET mycounter 0
     INCR mycounter
     ```
   - `DECR clave`: Decrementa el número almacenado en una clave en uno.
     ```
     DECR mycounter
     ```

7. **Trabajar con Sets**
   - `SADD clave valor`: Añade uno o más miembros a un set.
     ```
     SADD myset "member1"
     ```
   - `SMEMBERS clave`: Obtiene todos los miembros de un set.
     ```
     SMEMBERS myset
     ```
   - `SREM clave miembro`: Elimina uno o más miembros de un set.
     ```
     SREM myset "member1"
     ```

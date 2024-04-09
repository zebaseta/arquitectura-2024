## Correr docker

1. Crear e iniciar contenedores     => docker-compose up -d # -d para correr en backgroud
2. Solo iniciar contenedeores       => docker-compose start

## Crear un proyecto nuevo 

    a. Pasos previos: 
        a1. Instala node                            => https://nodejs.org/en/download/
        a2. Instala typescrypt                      => npm install -g typescript (global)
                                                    => npm install --save-dev typescript (local - recomendado como paso b1)
        a3. Instalar ts-node                        => npn install ts-node (global) #para correr archivos .ts sin compilar a js
                                                    => npm install --save-dev ts-node (local - recomendado como paso b2)
    b. Crear proyecto   (solo para crear)           => npm init o npm init -y #acepta valores default y salta preguntas
    c. Inicializar typescript                       => tsc --init #esto crea un archivo tsconfig.json
    d. Instalar tipos Node.js                       =>  npm install --save-dev @types/node #esto ayuda a que se entiedan funciones y objetos especificos de Node.js

## Correr un proyecto 

    a. Verificar pasos de punto anterior (instalación node, typescript, y ts'node)
    b. Instalar dependencias: npm install
    c. Correr:
        c1. Compilar y ejecutar el archivo principal (main, server) => tsc archivo.ts #esto crea el archivo archivo.js
                                                                    => node archivo.js
        c2. Correr directamente                                     => npx ts-node archivo.ts

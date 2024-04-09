## Orden de ejecucion, para dummies:
0. Verificar instalación docker, node, typescrypt, ts-node (ver README principal)
1. Parados en carpeta docker                => docker-compose up -d / docker-compose start -d
2. Parados en carpeta web-server            => npm install
3. Parados en carpeta web-server/src        => npx ts-node server.ts
2. Parados en carpeta data-generator        => npm install
3. Parados en carpeta data-generator/src    => npx ts-node sendData.ts
import CacheModule from './cacheModule';

const cache = new CacheModule();

async function run() {
  await cache.set('test_key', 'Hello, Redis!');
  const value = await cache.get('test_key');
  console.log(value); // "Hello, Redis!"

  await cache.del('test_key');
}

run();

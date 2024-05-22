// src/RedisCache.ts
import { createClient, RedisClientType } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

class RedisCache {
    private static instance: RedisCache;
    private client: RedisClientType;

    private constructor() {
        this.client = createClient({
            url: process.env.REDIS_URL || 'redis://localhost:6379'
        });

        this.client.on('connect', () => {
            console.log('Cliente conectado');
        });

        this.client.on('error', (err) => {
            console.log('Error =>', err);
        });

        this.client.connect().catch(console.error);
    }

    public static getInstance(): RedisCache {
        if (!RedisCache.instance) {
            RedisCache.instance = new RedisCache();
        }
        return RedisCache.instance;
    }

    public async setCache(key: string, value: any, expireTime?: number): Promise<void> {
        const stringValue = JSON.stringify(value);
        if (expireTime) {
            await this.client.setEx(key, expireTime, stringValue);
        } else {
            await this.client.set(key, stringValue);
        }
    }

    public async getCache(key: string): Promise<any> {
        const value = await this.client.get(key);
        return value ? JSON.parse(value) : null;
    }
}

export default RedisCache;
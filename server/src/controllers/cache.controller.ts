import { Response } from "express";
import { Redis } from "ioredis";

export class CacheController {

    static redis = new Redis({port: 6379, host: process.env.REDIS_SERVER_NAME});

    static async cacheData(req: any, res: Response) {
        try {
            const dataToCache = req.body.data;
            await CacheController.redis.set(req.body.cacheKey + req.currentUser.id, JSON.stringify(dataToCache), 'EX', 3600); // Cache for 1 hour
            res.status(200).json(dataToCache);
        } catch (error) {
            res.status(200).send(null);
        }
    }   

    static async getChachedData(req: any, res: Response) {
        try {
            const cachedData = await CacheController.redis.get(req.params.cacheKey + req.currentUser.id);

            if (cachedData) {
                res.status(200).json(JSON.parse(cachedData));
            } else {
                res.status(200).send(null);
            }
        } catch (error) {
            res.status(200).send(null);
        }
    }
}
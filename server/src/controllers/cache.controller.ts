import { Request, Response } from "express";
import Redis from "ioredis";

export class CacheController {

    static redis = new Redis();

    static async cacheData(req: Request, res: Response) {
        const dataToCache = req.body.data;
        await CacheController.redis.set(req.body.cacheKey, JSON.stringify(dataToCache), 'EX', 3600); // Cache for 1 hour
        res.status(200).json(dataToCache);
    }   

    static async getChachedData(req: Request, res: Response) {
        const cachedData = await CacheController.redis.get(req.params.cacheKey);

        if (cachedData) {
            res.status(200).json(JSON.parse(cachedData));
        } else {
            res.status(404).send('Data not found in the cache');
        }
    }
}
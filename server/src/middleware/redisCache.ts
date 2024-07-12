import Redis from "ioredis";
import express from "express";

const redis = new Redis();

export const checkCache = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const cachedData = await redis.get(req.body.cacheKey);

  if (cachedData && cachedData === req.body.data) {
    res.send(JSON.parse(cachedData));
  } else {
    next(); // Continue to the route handler if data is not in the cache
  }
};
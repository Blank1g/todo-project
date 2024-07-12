import * as express from "express";

import { authentification } from "../middleware/authentification";
import { CacheController } from "../controllers/cache.controller";
import { checkCache } from "../middleware/redisCache";

const Router = express.Router();

Router.post(
    "",
    [authentification, checkCache],
    CacheController.cacheData
);

Router.get(
    "/:cacheKey",
    authentification,
    CacheController.getChachedData
);

export { Router as cacheRoutes };
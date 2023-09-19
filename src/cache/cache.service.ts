import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {

    constructor(
        @Inject(CACHE_MANAGER) private chacheManager: Cache
    ) { }

    async getCache<T>(key: string, functionRequest: () => Promise<T>): Promise<T> {

        const allData: T = await this.chacheManager.get(key);

        if (allData)
            return allData;

        const data: T = await functionRequest();

        await this.chacheManager.set(key, data);
        return data;
    }
}

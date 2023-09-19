import { Inject, Injectable } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CityService {

    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        @Inject(CACHE_MANAGER) private chacheManager: Cache
    ) { }

    async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {

        const citiesCache: CityEntity[] = await this.chacheManager.get(`state_${stateId}`);
        if (citiesCache)
            return citiesCache;
        const cities = await this.cityRepository.find({
            where: {
                stateId
            }
        })
        await this.chacheManager.set(`state_${stateId}`, cities);
        return cities;
    }
}

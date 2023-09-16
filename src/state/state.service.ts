import { Injectable } from '@nestjs/common';
import { StateEntity } from './entities/state.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StateService {

    constructor(
        @InjectRepository(StateEntity)
        private readonly stateRepository: Repository<StateEntity>
    ) { }


    /**
     * Retorna uma lista de estados
     * @returns retorna uma lsita de estados
     */
    async getAllState(): Promise<StateEntity[]> {
        return this.stateRepository.find();
    }
}

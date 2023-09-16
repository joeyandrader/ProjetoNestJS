import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { StateService } from './state.service';
import { StateEntity } from './entities/state.entity';

@Controller('state')
export class StateController {
    constructor(private readonly stateService: StateService) { }

    @Get()
    async getAllState(): Promise<StateEntity[]> {
        return this.stateService.getAllState()
    }
}

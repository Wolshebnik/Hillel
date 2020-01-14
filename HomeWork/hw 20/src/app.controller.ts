import {Body, Controller, Delete, Get, Param, Put, Query,} from '@nestjs/common';
import {Formula, IParam} from './formula.interface';
import {AppService} from './app.service';

@Controller('/parameter')
export class AppController {
    formula: Formula;

    constructor(private readonly appService: AppService) {
        this.formula = {
            parameters: [
                {
                    id: 703,
                    validation: {
                        min: 0,
                        max: 100,
                        required: null,
                        readonly: null,
                        params: null,
                    },
                    default: '10',
                    name: 'WF',
                    label: 'Waste Factor',
                },
                {
                    id: 702,
                    validation: {
                        min: 0,
                        max: 60,
                        required: null,
                        readonly: null,
                        params: null,
                    },
                    default: '10',
                    name: 'FILL',
                    label: 'Cable/Pipe FILL/occupancy FILL',
                },
                {
                    id: 701,
                    validation: {
                        min: null,
                        max: null,
                        required: null,
                        readonly: true,
                        params: null,
                    },
                    default: '150',
                    name: 'T',
                    label: 'Seal Thickness',
                },
                {
                    id: 700,
                    validation: {
                        min: null,
                        max: 400,
                        required: null,
                        readonly: null,
                        params: null,
                    },
                    default: '200',
                    name: 'W',
                    label: 'Opening Width',
                },
                {
                    id: 698,
                    validation: {
                        min: null,
                        max: 400,
                        required: null,
                        readonly: null,
                        params: null,
                    },
                    default: '200',
                    name: 'H',
                    label: 'Opening Height',
                },
                {
                    id: 696,
                    validation: {
                        min: null,
                        max: null,
                        required: null,
                        readonly: null,
                        params: null,
                    },
                    default: '1',
                    name: 'OP',
                    label: 'No of Openings',
                },
            ],
            id: 162,
            uuid: 'a31ebb13-43db-4ed6-ba47-d026fb899c8f',
            createdAt: '15:30:18.896638+00',
            updatedAt: '15:30:18.896638+00',
            name: 'rectangular',
            formula:
                'round(OP * (H * W * T) / 1000 / 1000 * (100 - FILL) / 100 / 2.1 * (100 + WF) / 100, 1)',
        };
    }

    @Get('/:id')
    getHello(@Param() param: { id: string }): IParam {
        return this.formula.parameters.find(curr => curr.id === +param.id);
    }

    @Delete('/:id')
    getDelete(@Param() param: { id: string }): Formula {
        //localhost:3000/parameter/703
        this.formula.parameters = this.formula.parameters.filter(curr => curr.id !== +param.id,);
        return this.formula;
    }

    @Put('/put')
    getPut(@Body() body: IParam): Formula {
        // localhost:3000/parameter/put
        this.formula.parameters = this.formula.parameters.map(curr => {
            if (curr.id === body.id) curr = body;
            return curr;
        });
        return this.formula;
    }

    @Get('/')
    getMinMax(@Query() param: { min: string; max: string }): IParam[] {
        // localhost:3000/parameter?min=695&max=701
        return this.formula.parameters.filter(
            curr => curr.id >= +param.min && curr.id <= +param.max,
        );
    }
}

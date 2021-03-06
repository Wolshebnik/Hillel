import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IFormula, IParam, BodyValue } from './formula.interface';
import { evaluate } from 'mathjs';

@Controller()
export class AppController {
  formula: IFormula;

  constructor(private appService: AppService) {
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

  @Get('/get')
  getHello(): IFormula {
    return this.formula;
  }

  // @ts-ignore
  // @ts-ignore
  @Post('/post')
  async getPost(@Body() body: IParam): Promise<IFormula> {
    this.formula.parameters.push(body);
    return this.formula
  }

  @Delete('/delete/:id')
  getDel(@Param() param):IParam[] {
    //запрос delete http://localhost:3000/delete/696
    return this.formula.parameters.filter(arr => arr.id !== +param.id);
  }

  @Post('/object')
  getPostObject(@Body() body: BodyValue[]): number {
    // запрос post http://localhost:3000/object
    // body [{"id": 703, "value": 24}, {"id": 702, "value": 14}, {"id": 701, "value": 35}, {"id": 700, "value": 21}, {"id": 698,
    // "value": 51}, {"id": 696, "value": 12}]
    const { parameters, formula } = this.formula;
    const newObject = parameters.reduce((prev: {}, next: IParam) => {
      const newBody = body.find(curr => curr.id === next.id);
      return { ...prev, [next.name]: newBody.value };
    }, {});

    return evaluate(formula, newObject);
  }
}

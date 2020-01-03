import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { IPerson } from './interfaces/person.interface';
import { IApp } from './interfaces/app-controller.interface';
import { IFormula } from './interfaces/formula.interface';
import { agent } from 'supertest';

@Controller('api')
export class AppController implements IApp{
  num: IPerson;
  formula: IFormula;
  constructor(private readonly appService: AppService) {
    const person = { name: 'Vasia' };
    this.num = {
      id: 23, name: 'Vasia', age: 34, lastName: '432', children: {
        kidName: 'string',
      }
    };
    this.formula = { 
      "parameters": [
          {
              "id": 703,
              "validation": {
                  "min": 0,
                  "max": 100,
                  "required": null,
                  "readonly": null,
                  "params": null
              },
              "default": "10",
              "name": "WF",
              "label": "Waste Factor"
          },
          {
              "id": 702,
              "validation": {
                  "min": 0,
                  "max": 60,
                  "required": null,
                  "readonly": null,
                  "params": null
              },
              "default": "10",
              "name": "FILL",
              "label": "Cable/Pipe FILL/occupancy FILL"
          },
          {
              "id": 701,
              "validation": {
                  "min": null,
                  "max": null,
                  "required": null,
                  "readonly": true,
                  "params": null
              },
              "default": "150",
              "name": "T",
              "label": "Seal Thickness"
          },
          {
              "id": 700,
              "validation": {
                  "min": null,
                  "max": 400,
                  "required": null,
                  "readonly": null,
                  "params": null
              },
              "default": "200",
              "name": "W",
              "label": "Opening Width"
          },
          {
              "id": 698,
              "validation": {
                  "min": null,
                  "max": 400,
                  "required": null,
                  "readonly": null,
                  "params": null
              },
              "default": "200",
              "name": "H",
              "label": "Opening Height"
          },
          {
              "id": 696,
              "validation": {
                  "min": null,
                  "max": null,
                  "required": null,
                  "readonly": null,
                  "params": null
              },
              "default": "1",
              "name": "OP",
              "label": "No of Openings"
          }
      ],
      "id": 162,
      "uuid": "a31ebb13-43db-4ed6-ba47-d026fb899c8f",
      "createdAt": "15:30:18.896638+00",
      "updatedAt": "15:30:18.896638+00",
      "name": "rectangular",
      "formula": "round(OP * (H * W * T) / 1000 / 1000 * (100 - FILL) / 100 / 2.1 * (100 + WF) / 100, 1)",
  };


    //  num = '3243';
  }
  @Get('/all')
  getAll1(): IPerson {
    return this.num;
  }

  getHello(): string {
    return '';
  }

  getStudent(): string {
    return '';
  }

  @Post('/all/:id/post') // localhost:3000/all/:id/post
  postAll(@Body() body: {person: IPerson}, @Param() id: { id: number}, @Query() query:{name:string, age:number } ) {
    return { 
      ...body.person,
      id: id.id,
      query,
    };
  }



}

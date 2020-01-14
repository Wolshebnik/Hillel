import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { TestClass } from './test.service';
import { IGroup } from '../schemas/group.schema';
import {IGetGroup} from "../../interfaces/group.interface";

@Injectable()
export class GroupService {
  constructor(
    @Inject('GroupModelToken') private readonly groupModel: Model<IGroup>,
    public testClass: TestClass,
  ) {}

  async createGroup(group: IGroup):Promise<IGroup> {
    return await this.groupModel.create(group);
  }
  async searchGroup():Promise<IGetGroup> {
    return await this.groupModel.aggregate([
      { $match: {} },
      {
        $lookup: {
          from: 'studentmodels',
          localField: '_id',
          foreignField: 'groupID',
          as: 'pupils',
        },
      },
    ]);
  }
}

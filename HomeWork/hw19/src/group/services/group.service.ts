import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { TestClass } from './test.service';
import { Group } from '../schemas/group.schema';

@Injectable()
export class GroupService {
  constructor(
    @Inject('GroupModelToken') private readonly groupModel: Model<Group>,
    public testClass: TestClass,
  ) {}

  async createGroup(group: Group) {
    return await this.groupModel.create(group);
  }
  async searchGroup() {
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

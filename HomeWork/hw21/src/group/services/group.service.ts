import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { IGroup } from '../schemas/group.schema';
import {IGetGroup} from "../../interfaces/group.interface";

@Injectable()
export class GroupService {
  constructor(
    @Inject('GroupModelToken') private readonly groupModel: Model<IGroup>,
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

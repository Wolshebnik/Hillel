import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GroupService } from '../services/group.service';
import { IGroup } from '../schemas/group.schema';
import {IGetGroup} from "../../interfaces/group.interface";

@Controller('group')
export class GroupController {
  constructor(public groupService: GroupService) {}

  @Post('add')
  async createGroup(@Body() body: IGroup): Promise<IGroup> {
    return await this.groupService.createGroup(body);
  }

  @Get('all')
  async searchGroup():Promise<IGetGroup>  {
    return await this.groupService.searchGroup();
  }
}

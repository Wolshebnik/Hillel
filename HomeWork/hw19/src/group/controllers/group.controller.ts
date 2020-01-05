import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GroupService } from '../services/group.service';
import { Group } from '../schemas/group.schema';

@Controller('group')
export class GroupController {
  constructor(public groupService: GroupService) {}

  @Post('add')
  async createGroup(@Body() body: Group) {
    const res = await this.groupService.createGroup(body);
    return res;
  }

  @Get('')
  async searchGroup() {
    return await this.groupService.searchGroup();
  }
}

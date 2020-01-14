import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { TeacherService } from '../services/teacher.service';
import { ITeacher } from '../schemas/teacher.schema';
import { IGetTeacher } from '../../interfaces/teacher.interface';

@Controller('teacher')
export class TeacherController {
  constructor(@Inject('newTeacher') public teacherService: TeacherService) {}

  @Post('add')
  async createGroup(@Body() body: ITeacher): Promise<ITeacher> {
    return await this.teacherService.createTeacher(body);
  }

  @Get('all')
  async searchTeacher(): Promise<ITeacher> {
    return await this.teacherService.getAllTeacher();
  }
  @Get('all/student')
  async searchTeacherWithStudent(): Promise<IGetTeacher> {
    return await this.teacherService.getAllTeacherWithStudents();
  }
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StudentService } from '../services/students.service';
import { IStudent } from '../schemas/student.schema';

@Controller('student')
export class StudentController {
  constructor(public studentService: StudentService) {}

  @Get('search/:id')
  async getStudent(@Param() data: { id: string }) {
    return await this.studentService.getStudentById(data.id);
  }

  @Get('all')
  async setStudentAll() {
    return await this.studentService.getAllStudent();
  }

  @Post('add')
  async createStudent(@Body() body: IStudent) {
    return await this.studentService.createStudent(body);
  }
}

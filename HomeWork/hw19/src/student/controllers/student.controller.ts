import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StudentService } from '../services/students.service';
import { Student } from '../schemas/student.schema';

@Controller('student')
export class StudentController {
  constructor(public studentService: StudentService) {}
  @Get(':id')
  async getStudent(@Param() data: { id: string }) {
    const res =
      data.id === 'all'
        ? await this.studentService.getAllStudent()
        : await this.studentService.getStudentById(data.id);
    console.log('RESULT', { ...res });
    return res;
  }

  @Post('add')
  async createStudent(@Body() body: Student) {
    const res = await this.studentService.createStudent(body);
    return res;
  }
}

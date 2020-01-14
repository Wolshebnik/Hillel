import { Module } from '@nestjs/common';
import { TeacherController } from './controllers/teacher.controller';
import { DatabaseModule } from '../database/database.module';
import { teacherProvider } from './teacher.providers'
import {TeacherService} from "./services/teacher.service";
import {StudentService} from "../student/services/students.service";
import {studentProvider} from "../student/student.providers";


@Module({
  imports: [DatabaseModule],
  controllers: [TeacherController],
  providers: [{provide: 'newTeacher', useClass: TeacherService}, teacherProvider, StudentService, studentProvider],
})
export class TeacherModule {}

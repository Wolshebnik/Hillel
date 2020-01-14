import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student.controller';
import { DatabaseModule } from '../database/database.module';
import { studentProvider } from './student.providers';
import { StudentService } from './services/students.service';
import { TestClass } from './services/test.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentController],
  providers: [StudentService, TestClass, studentProvider],
})
export class StudentModule {}

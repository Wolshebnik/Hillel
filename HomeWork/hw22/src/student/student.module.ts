import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student.controller';
import { DatabaseModule } from '../database/database.module';
import { studentProvider } from './student.providers';
import { StudentService } from './services/students.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentController],
  providers: [StudentService, studentProvider],
})
export class StudentModule {}

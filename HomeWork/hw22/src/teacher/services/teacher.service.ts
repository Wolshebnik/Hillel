import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { ITeacher } from '../schemas/teacher.schema';
import { IStudent } from '../../student/schemas/student.schema';
import useRealTimers = jest.useRealTimers;

@Injectable()
export class TeacherService {
  constructor(
    @Inject('TeacherModelToken') private readonly teacherModel: Model<ITeacher>,
    @Inject('StudentModelToken') private readonly studentModel: Model<IStudent>,
  ) {}

  async createTeacher(teacher: ITeacher): Promise<ITeacher> {
    return await this.teacherModel.create(teacher);
  }

  async getAllTeacherWithStudents() {
    const teachers = await this.teacherModel.find();
    const students = await this.studentModel.find();
    const all = teachers.map(item => {
      const findStudents = item.studentsId.map(studentString => {
        const findStudent = students.find(student => {
          return student._id == studentString;
        });
        return findStudent;
      });
      item.studentsId = findStudents;
      return item;
    });
    return all;
  }

  async getAllTeacher() {
    return await this.teacherModel.find();
  }
}

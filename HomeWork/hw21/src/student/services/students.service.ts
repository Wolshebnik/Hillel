import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { TestClass } from './test.service';
import { Student } from '../schemas/student.schema';

@Injectable()
export class StudentService {
  constructor(
    @Inject('StudentModelToken') private readonly studentModel: Model<Student>,
    public testClass: TestClass,
  ){}
  async createStudent(student: Student) {
    console.log(this.testClass.getVasia())
    return await this.studentModel.create(student);
  }

  async getStudentById(id: string) {
    return await this.studentModel.findOne({_id: id}).lean().exec();
  }
}
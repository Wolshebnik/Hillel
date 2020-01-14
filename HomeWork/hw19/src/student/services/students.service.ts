import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { TestClass } from './test.service';
import { IStudent } from '../schemas/student.schema';

@Injectable()
export class StudentService {
  constructor(
    @Inject('StudentModelToken') private readonly studentModel: Model<IStudent>,
    public testClass: TestClass,
  ) {}

  async createStudent(student: IStudent) {
    return await this.studentModel.create(student);
  }

  async getStudentById(id: string): Promise<IStudent> {
    return await this.studentModel
      .findOne({ _id: id })
      .lean()
      .exec();
  }

  async getAllStudent(): Promise<IStudent[]> {
    return await this.studentModel.find();
  }
}

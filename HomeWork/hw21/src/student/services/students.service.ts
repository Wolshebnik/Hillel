import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { IStudent } from '../schemas/student.schema';

@Injectable()
export class StudentService {
  constructor(
    @Inject('StudentModelToken') private readonly studentModel: Model<IStudent>,
  ) {}

  async createStudent(student: IStudent): Promise<IStudent> {
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

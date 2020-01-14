import * as mongoose from 'mongoose';
import { ObjectId } from 'mongoose';

export const teacherSchema: any = new mongoose.Schema({
  name: String,
  age: Number,
  experience: Number,
  studentsId: Array,
});

export interface Teacher {
  readonly name: string;
  readonly age: number;
  readonly experience: number;
  readonly studentsId: ObjectId[];
}

export interface ITeacher extends Document, Teacher {}

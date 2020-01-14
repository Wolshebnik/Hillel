import * as mongoose from 'mongoose';
import { ObjectId } from 'mongoose';

export const studentSchema: any = new mongoose.Schema({
  name: String,
  lastName: String,
  groupID: ObjectId,
});

export interface Student {
  readonly name: string;
  readonly lastName: string;
  readonly groupID: ObjectId;
}

export interface IStudent extends Document, Student {}

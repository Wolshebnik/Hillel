import * as mongoose from 'mongoose';
import { ObjectId } from 'mongoose';

export const groupSchema: any = new mongoose.Schema({
  name: String,
  teacherId: ObjectId,
});

export interface Group {
  readonly name: string;
  readonly teacher: ObjectId;
}

export interface IGroup extends Document, Group {}

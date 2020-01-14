
import * as mongoose from 'mongoose';

export const groupSchema: any = new mongoose.Schema({
  name: String,
  teacher: String,
});

// tslint:disable-next-line:interface-name
export interface Group {
  readonly name: string;
  readonly teacher: string;
}

export interface IGroup extends Document, Group {}

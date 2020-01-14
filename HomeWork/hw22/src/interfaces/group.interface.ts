import {ObjectId} from 'mongoose';
import {IStudent} from "../student/schemas/student.schema";

export interface IGetGroup {
    _id: ObjectId;
    name: string;
    pupils: IStudent[];
}
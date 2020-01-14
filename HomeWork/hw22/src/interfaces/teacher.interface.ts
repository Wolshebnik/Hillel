import {ObjectId} from 'mongoose';
import {IStudent} from "../student/schemas/student.schema";

export interface IGetTeacher {
    name: string;
    age: number;
    experience: number;
    studentId: IStudent[];
}

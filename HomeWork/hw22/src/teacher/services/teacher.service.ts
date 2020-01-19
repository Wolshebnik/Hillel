import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { ITeacher } from '../schemas/teacher.schema';
import { IStudent } from '../../student/schemas/student.schema';

@Injectable()
export class TeacherService {
  constructor(
    @Inject('TeacherModelToken') private readonly teacherModel: Model<ITeacher>,
    @Inject('StudentModelToken') private readonly studentModel: Model<IStudent>,
  ) {}

  async createTeacher(teacher: ITeacher): Promise<ITeacher> {
    return await this.teacherModel.create(teacher);
    // sent => {
    //   "studentsId": [
    //   "5e1252917e18279c241e2e1e",
    //   "5e1252917e18279c241e2e1f",
    //   "5e1d83904c29db41882e5b5f"
    // ],
    //     "name": "Sergey",
    //     "age": 32,
    //     "experience": 10,
    //     "__v": 0
    // }
  }

  async getAllTeacherWithStudents() {
    let teachers = await this.teacherModel.find();

    teachers = Promise.all(
      teachers.map(async teacher => {
        teacher.studentsId = await this.studentModel.find({
          _id: { $in: teacher.studentsId },
        });
        return teacher;
      }),
    );

    return teachers;
  }

  //   const students = await this.studentModel.find();
  //   const all = teachers.map(item => {
  //     const addStudents = item.studentsId.map(studentString => {
  //       const findStudent = students.find(student => {
  //         return student._id == studentString;
  //       });
  //       return findStudent;
  //     });
  //     item.studentsId = addStudents;
  //     return item;
  //   });
  //   return all;
  // }

  // got => [
  //     {
  //       "studentsId": [
  //         {
  //           "_id": "5e1252917e18279c241e2e1e",
  //           "name": "Andrey",
  //           "lastName": "Teslenko",
  //           "groupID": "5e1239514477b23ae89919a3"
  //         },
  //         {
  //           "_id": "5e1252917e18279c241e2e1f",
  //           "name": "Kirill",
  //           "lastName": "Teslenko",
  //           "groupID": "5e1239514477b23ae89919a3"
  //         },
  //         {
  //           "_id": "5e1d83904c29db41882e5b5f",
  //           "name": "Natasha",
  //           "lastName": "Teslenko",
  //           "groupID": "5e1239514477b23ae89919a3",
  //           "__v": 0
  //         }
  //       ],
  //       "_id": "5e21cd753c3bdf112ce49a71",
  //       "name": "Sergey",
  //       "age": 32,
  //       "experience": 10,
  //       "__v": 0
  //     }
  //     ]

  async getAllTeacher() {
    return await this.teacherModel.find();
  }
}

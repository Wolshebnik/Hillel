import { Connection, Document, Model } from 'mongoose';
import { teacherSchema } from './schemas/teacher.schema';

export const teacherProvider: any = {
  provide: 'TeacherModelToken',
  useFactory: (connection: Connection): Model<Document> =>
    connection.model('TeacherModel', teacherSchema),
  inject: ['DbConnectionToken'],
};

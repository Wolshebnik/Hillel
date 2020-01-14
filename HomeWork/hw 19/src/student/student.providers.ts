import { Connection, Document, Model } from 'mongoose';
import { studentSchema } from './schemas/student.schema';

export const studentProvider: any = 
  {
    provide: 'StudentModelToken',
    useFactory: (connection: Connection): Model<Document> => connection.model('StudentModel', studentSchema),
    inject: ['DbConnectionToken'],
  };

import { Connection, Document, Model } from 'mongoose';
import { groupSchema } from './schemas/group.schema';

export const groupProvider: any = {
  provide: 'GroupModelToken',
  useFactory: (connection: Connection): Model<Document> =>
    connection.model('GroupModel', groupSchema),
  inject: ['DbConnectionToken'],
};

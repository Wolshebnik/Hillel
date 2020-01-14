import * as mongoose from 'mongoose';
import { ConfigService } from '../config.service';
export const databaseProviders: any = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (config: ConfigService): Promise<any> => {
      (mongoose as any).Promise = global.Promise;
      const dbConnection: any = mongoose.connection;
      const host: string = config.get('dbhost');

      const connectionConfig: {
        autoIndex: boolean;
        useCreateIndex: boolean;
      } = {
        autoIndex: true,
        useCreateIndex: true,
      };
      await mongoose.connect(host, {
        config: connectionConfig,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      return dbConnection;
    },
    inject: [ConfigService],
  },
];

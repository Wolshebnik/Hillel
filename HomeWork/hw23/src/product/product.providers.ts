import { Connection, Document, Model } from 'mongoose';
import { productSchema } from './schemas/product.schema';

export const productProvider: any = {
  provide: 'ProductModelToken',
  useFactory: (connection: Connection): Model<Document> =>
    connection.model('ProductModel', productSchema),
  inject: ['DbConnectionToken'],
};

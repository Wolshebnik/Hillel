import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { IProduct } from '../schemas/product.schema';


@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductModelToken') private readonly productModel: Model<IProduct>,
  ) {}

  async createProduct(product: IProduct):Promise<IProduct> {
    return await this.productModel.create(product);
  }

  async getProduct (): Promise<IProduct> {
    return await this.productModel.find();
  }

}


import * as mongoose from 'mongoose';

export const productSchema: any = new mongoose.Schema({
  name: String,
  price: Number,
  country: String
});

export interface Product {
  readonly name: string;
  readonly price: number;
  readonly country: string;
}

export interface IProduct extends Document, Product {}

import { Controller, Post, Get ,Body } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { IProduct } from '../schemas/product.schema';


@Controller('product')
export class ProductController {
  constructor(public productService: ProductService) {}

  @Post('add')
  async createGroup(@Body() body: IProduct): Promise<IProduct> {
    return await this.productService.createProduct(body);
  }

  @Get('all')
  async getProduct(): Promise<IProduct> {
    return await this.productService.getProduct();
  }

}

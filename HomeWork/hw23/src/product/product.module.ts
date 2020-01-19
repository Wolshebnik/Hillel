import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { DatabaseModule } from '../database/database.module';
import { productProvider } from './product.providers';
import { ProductService } from './services/product.service';


@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService, productProvider],
})
export class ProductModule {}

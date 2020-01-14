import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);// http.createServer((req, res) => { res.end()})
  await app.listen(3000, () => console.log('Server is listening on port 3000'));
}
bootstrap();

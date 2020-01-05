import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ConfigModule } from './config.module';

import { GroupModule } from './group/group.module';

@Module({
  imports: [StudentModule, ConfigModule, GroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

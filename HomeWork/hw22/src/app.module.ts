import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config.module';

import { StudentModule } from './student/student.module';
import { GroupModule } from './group/group.module';
import {TeacherModule} from "./teacher/teacher.module";

@Module({
  imports: [StudentModule, ConfigModule, GroupModule, TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

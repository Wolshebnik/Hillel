import { Module } from '@nestjs/common';
import { GroupController } from './controllers/group.controller';
import { DatabaseModule } from '../database/database.module';
import { groupProvider } from './group.providers';
import { GroupService } from './services/group.service';
import { TestClass } from './services/test.service';

@Module({
  imports: [DatabaseModule],
  controllers: [GroupController],
  providers: [GroupService, TestClass, groupProvider],
})
export class GroupModule {}

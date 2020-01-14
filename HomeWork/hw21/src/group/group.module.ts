import { Module } from '@nestjs/common';
import { GroupController } from './controllers/group.controller';
import { DatabaseModule } from '../database/database.module';
import { groupProvider } from './group.providers';
import { GroupService } from './services/group.service';


@Module({
  imports: [DatabaseModule],
  // controllers: [GroupController],
  // providers: [GroupService, groupProvider],
})
export class GroupModule {}

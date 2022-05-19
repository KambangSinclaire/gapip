import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './modules/clients/clients.module';
import { ActivityModule } from './modules/activity/activity.module';

@Module({
  imports: [ClientsModule, ActivityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

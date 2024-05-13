import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronExampleModule } from './CronExample/CronExample.module';
import { SchedulerRegistry } from '@nestjs/schedule';
import { GlobalModule } from './ME/GlobalModule/GlobalModule.module';
import { QueueingModule } from './Queueing/queueing.module';
import { BullBoardInstance, BullBoardModule, InjectBullBoard } from "@bull-board/nestjs";
import { ExpressAdapter } from '@bull-board/express';
@Module({
  imports: [
    CronExampleModule,
    GlobalModule,
    QueueingModule,
    BullBoardModule.forRoot({
      route: '/queues',
      adapter: ExpressAdapter
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(@InjectBullBoard() private readonly boardInstance: BullBoardInstance) { }

  // onModuleInit() {
  //   const job = this.schedule.getCronJobs();
  //   if (job) {
  //     console.log('Cron job found:', job);
  //     // Now you can do whatever you want with the cron job reference
  //   } else {
  //     console.log('Cron job not found');
  //   }
  // }
}

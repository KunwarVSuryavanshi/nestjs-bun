import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronExampleModule } from './CronExample/CronExample.module';
import { SchedulerRegistry } from '@nestjs/schedule';

@Module({
  imports: [CronExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{ 
  // constructor(private schedule: SchedulerRegistry) { }
  
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

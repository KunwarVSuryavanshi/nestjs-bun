import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { CronExampleController } from "./CronExample.controller";
import { CronExampleService } from "./CronExample.service";

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
  controllers: [CronExampleController],
  providers: [CronExampleService]
})

export class CronExampleModule { }
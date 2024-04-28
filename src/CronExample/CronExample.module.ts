import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { CronExampleController } from "./CronExample.controller";
import { CronExampleService } from "./CronExample.service";
import { LocalModule } from "src/ME/LocalModule/LocalModule.module";
import { LocalModuleController } from "src/ME/LocalModule/LocalModule.controller";

@Module({
  imports: [
    ScheduleModule.forRoot(),
    LocalModule
  ],
  controllers: [CronExampleController],
  providers: [CronExampleService]
})

export class CronExampleModule { }
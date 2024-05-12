import { Controller, Get } from "@nestjs/common";
import { CronExampleService } from "./CronExample.service";
import { Cron, CronExpression, Interval } from "@nestjs/schedule";
import { GlobalModuleService } from "src/ME/GlobalModule/GlobalModule.service";
import { LocalModuleService } from "src/ME/LocalModule/LocalModule.service";

@Controller('cron')
export class CronExampleController {
  constructor(
    private readonly cronExample: CronExampleService,
    private readonly globalService: GlobalModuleService, // Can be used, since global module
    private readonly localModuleService: LocalModuleService //Can not use this without importing it in module
  ) { }

  @Get()
  handleCronRoute(): string {
    return 'Welcome✨ to the cron route!'
  }

  // @Cron('5 * * * * *') // sec min hour day month week ---> 5th second of every min
  @Cron(CronExpression.EVERY_30_SECONDS, {
    name: 'logger',
    // timeZone: 'IST'
  })
  handleCron() {
    this.cronExample.logEverThirtySeconds()
  }

  @Interval(600000)
  handleInterval() {
    console.log('Every 10 min log using interval')
  }

  @Get('/global')
  handleGlobal() {
    return this.globalService.printGlobalService()
  }

}
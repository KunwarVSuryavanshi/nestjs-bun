import { Controller, Get } from "@nestjs/common";
import { CronExampleService } from "./CronExample.service";
import { Cron, CronExpression, Interval } from "@nestjs/schedule";

@Controller('cron')
export class CronExampleController {
  constructor(private readonly cronExample: CronExampleService) { }

  @Get()
  handleCronRoute(): string {
    return 'Welcome✨ to the cron route!'
  }

  // @Cron('5 * * * * *') // sec min hour day month week ---> 5th second of every min
  @Cron(CronExpression.EVERY_5_SECONDS, {
    name: 'logger',
    // timeZone: 'IST'
  })
  handleCron() {
    this.cronExample.logEverFiveSeconds()
  }

  @Interval(10000)
  handleInterval() {
    console.log('Every 10 sec log')
  }
}
import { Injectable } from "@nestjs/common";

@Injectable()
export class CronExampleService {
  logEverFiveSeconds() {
    console.log('**************************************** \n Log every 5 sec executed in Service file. \n**************************************** \n')
  }
}
import { Injectable } from "@nestjs/common";
import { GlobalModuleController } from "src/ME/GlobalModule/GlobalModule.controller";
import { GlobalModuleService } from "src/ME/GlobalModule/GlobalModule.service";

@Injectable()
export class CronExampleService {
  // constructor(private readonly globalController: GlobalModuleService) { }

  // callGlobal() {
  //   this.globalController.printGlobalService()
  // }

  logEverFiveSeconds() {
    console.log('**************************************** \n Log every 5 sec executed in Service file. \n**************************************** \n')
  }
}
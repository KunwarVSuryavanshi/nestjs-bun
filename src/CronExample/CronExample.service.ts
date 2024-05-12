import { Injectable } from "@nestjs/common";
import { GlobalModuleController } from "src/ME/GlobalModule/GlobalModule.controller";
import { GlobalModuleService } from "src/ME/GlobalModule/GlobalModule.service";

@Injectable()
export class CronExampleService {
  // constructor(private readonly globalController: GlobalModuleService) { }

  // callGlobal() {
  //   this.globalController.printGlobalService()
  // }

  logEverThirtySeconds() {
    console.log('\n**************************************** \n Log every 30 sec executed in CronExampleService file. \n**************************************** \n')
  }
}
import { Controller } from "@nestjs/common";

@Controller()
export class GlobalModuleController {
  printFromGlobal() {
    console.log('Printing from global contoller')
  }
}
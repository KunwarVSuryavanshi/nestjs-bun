import { Controller } from "@nestjs/common";

@Controller()
export class LocalModuleController {
  logFromLocal() {
    console.log('Hello from local controller');
  }
}
import { Injectable } from "@nestjs/common";

@Injectable()
export class LocalModuleService {
  logFromLocaService() {
    console.log('Hello 👋 from local service file')
  }
}
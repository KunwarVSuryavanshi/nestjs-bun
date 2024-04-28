import { Injectable } from "@nestjs/common";

@Injectable()
export class GlobalModuleService{
  printGlobalService() {
    console.log('This is from global service file');
    return `This is from global service file`
  }
}
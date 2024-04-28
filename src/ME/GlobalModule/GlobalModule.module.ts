import { Global, Module } from "@nestjs/common";
import { GlobalModuleService } from "./GlobalModule.service";
import { GlobalModuleController } from "./GlobalModule.controller";

@Global()
@Module({
  providers: [GlobalModuleService],
  controllers: [GlobalModuleController],
  exports: [GlobalModuleService]
})

export class GlobalModule { }
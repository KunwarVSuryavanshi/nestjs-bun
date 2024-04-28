import { Module } from "@nestjs/common";
import { LocalModuleService } from "./LocalModule.service";
import { LocalModuleController } from "./LocalModule.controller";

@Module({
  providers: [LocalModuleService],
  controllers: [LocalModuleController],
  exports: [LocalModuleService]
})

export class LocalModule { }
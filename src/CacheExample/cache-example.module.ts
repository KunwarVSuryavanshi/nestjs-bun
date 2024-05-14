import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { CacheController } from './cache-example.controller';

@Module({
  imports: [CacheModule.register()],
  controllers: [CacheController]
})
export class CacheExampleModule { }

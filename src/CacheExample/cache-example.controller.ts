import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Controller, Get, Inject, Param } from "@nestjs/common";
import { Cache } from "cache-manager";

@Controller('cache')
export class CacheController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  @Get(':id')
  async getId(@Param('id') id: string): Promise<string> {
    let value: string = await this.cacheManager.get('id');

    console.log('from cache manager', value)

    if (!value) {
      console.log('Setting cache manager', id)
      await this.cacheManager.set('id', id, 60000);
      value = await this.cacheManager.get('id');
    }

    return value
  }
}
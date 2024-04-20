import { Controller, Get, Param, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cat')
  greetCat(@Req() request: Request): string {
    return this.appService.greetCat(request)
  }

  @Get('cat/breed')
  getBreed(): string {
    return this.appService.getBreed()
  }

  // http://localhost:3000/queryy?no=123
  @Get('queryy')
  getQuery(@Query('no') query): string {
    console.log('Query', query)
    return `Your query is ${JSON.stringify(query)}`
  }

  @Get('id/:id')
  getParam(@Param() param): string {
    return this.appService.getParam(param)
  }

  @Get('redirect')
  @Redirect('https:github.com/KunwarVSuryavanshi', 301)
  getRedirect(@Query('youtube') query) {
    console.log('Query--->', query)
    if (query === 'yes') {
      return {
        url: 'https://www.youtube.com/'
      }
    }
  }

  @Get('promise')
  getPromise(): Promise<string>{
    return this.appService.getPromise()
  }
}

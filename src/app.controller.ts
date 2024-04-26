import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Redirect, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDTO } from './app.dto';
import { Response } from 'express';
import { SchedulerRegistry } from '@nestjs/schedule';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  private appservice2 = new AppService()

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cat')
  greetCat(@Req() request: Request, @Res({ passthrough: true }) res: Response) {
    // tinckering with res won't work without the passthrough
    res.status(HttpStatus.CREATED)
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
  getRedirect(@Query('youtube') query, @Query('anilist') anilist) {
    console.log('Query--->', query, anilist)
    if (query === 'yes') {
      return {
        url: 'https://www.youtube.com/'
      }
    }
    if (anilist) {
      return {
        url: 'https://anilist.co'
      }
    }
  }

  @Get('promise')
  getPromise(): Promise<string> {
    return this.appService.getPromise()
  }

  @Post('createCat')
  async createCat(@Body() createCatDto: CreateCatDTO) {
    //interface can be used here as well, but it will be lost once it is compiled to JS during runtime 🏃‍♂️
    // whereas the class CreateCatDTO will be still there during compile time ⚡
    console.log('Body for create car --->', createCatDto)
    return 'This route created a 🐈‍⬛ for you ✨!'
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateCatDTO) {
    return `This action updates a #${id} cat`;
  }

  @Get('/method')
  getMethod() {
    console.log('Method', this.appservice2.findCat())
  }
}

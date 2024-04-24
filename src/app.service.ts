import { Injectable, ParamData } from '@nestjs/common';
import { Cat } from './interface/app.interface';
import { CreateCatDTO } from './app.dto';

@Injectable()
export class AppService {
  private readonly cats: Cat[] = []
  private readonly cats2: CreateCatDTO[] = []

  getHello(): string {
    return 'Hello World!';
  }

  greetCat(request: Request): string {
    console.log('Request--->', request.cache, request.body)
    return 'Meow 🐈!'
  }

  getBreed(): string {
    return 'Orange ✨'
  }

  getParam(param: ParamData): string {
    return `Your param is ${JSON.stringify(param)}`
  }

  getPromise(): Promise<string> {
    // for (let i = 0; i < 10000000000; i++){}
    // setTimeout(() => {
    // return Promise.resolve('Your Promise is resolved')
    // }, 4000)
    return new Promise((res) => {
      setTimeout(() => {
        res('Promise resolved after 4000ms')
      }, 4000)
    })
  }

  createCat(argCat: Cat) {
    this.cats.push(argCat)
    this.cats2.push(argCat)
  }

  findCat(): Cat[] {
    return this.cats
  }
}

import { Injectable, ParamData } from '@nestjs/common';

@Injectable()
export class AppService {
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
}

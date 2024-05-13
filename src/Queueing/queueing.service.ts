import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";

@Injectable()
export class QueueingService {
  constructor(@InjectQueue('handle_queue') private handleQueue: Queue) {
    console.log('Queueing service file intialised. 🥳')
    console.log('Queue status--->', this.handleQueue.client.status)
    // this.init()
  }

  // async init() {
  //   try {
  //     await this.delay(1000, 1);
  //     this.checkQueueAvailability();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // private checkQueueAvailability(): void {
  //   if (this.handleQueue.client.status === "ready") {
  //     console.log("Redis is ready");
  //   } else {
  //     throw new Error("Redis not available");
  //   }
  // }

  // delay(t: number, val: any) {
  //   return new Promise(function (resolve) {
  //     setTimeout(function () {
  //       resolve(val);
  //     }, t);
  //   });
  // }

  addItemToQueue() {
    console.log('AddItemToQueue called', this.handleQueue.client.status)
    this.handleQueue.add({ myData: 'This string is data for the job' })
  }
}
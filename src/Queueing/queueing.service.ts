import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";

@Injectable()
export class QueueingService {
  constructor(@InjectQueue('handle_queue') private handleQueue: Queue) {
    console.log('Queueing service file intialised. 🥳')
  }

  addItemToQueue() {
    console.log('AddItemToQueue called')
    this.handleQueue.add({ myData: 'This string is data for the job' })
  }
}
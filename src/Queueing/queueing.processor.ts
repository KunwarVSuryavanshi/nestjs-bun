import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('handle_queue')
export class QueueingConsumer {
  constructor() {
    console.log('Queueing Consumer initialised. 👷')
  }
  @Process()
  handleQueue(job: Job<unknown>): string {
    console.log('Consumer called for the addItem queue')
    return `The job with id - ${job?.id} is being processed having data - ${job?.data}`
  }

  @Process('addItem')
  handleAddItem(job: Job<unknown>): string {
    console.log('Consumer called for the addItem queue')
    return `The job with id - ${job?.id} is being processed having data - ${job?.data}`
  }
}
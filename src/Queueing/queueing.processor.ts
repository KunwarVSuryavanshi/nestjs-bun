import { OnQueueActive, OnQueueCompleted, OnQueueEvent, OnQueueFailed, Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job } from "bull";

@Processor('handle_queue')
export class QueueingConsumer {
  constructor(private readonly logger: Logger) {
    console.log('Queueing Consumer initialised. 👷')
  }

  @OnQueueEvent('waiting')
  onQueueEvent() {
    this.logger.log('Queue event')
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.log(`Active ${job.id}`);
  }

  @OnQueueCompleted()
  onCompleted(job: Job) {
    this.logger.log(`Completed ${job.id}`);
  }

  @OnQueueFailed()
  onFailed(job: Job) {
    this.logger.log(`Failed ${job.id}`);
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
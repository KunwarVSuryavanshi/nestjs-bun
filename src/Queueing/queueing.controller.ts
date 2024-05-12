import { Controller, Get } from "@nestjs/common";
import { QueueingService } from "./queueing.service";

@Controller('queue')
export class QueueingController {
  constructor(private readonly service: QueueingService) {
    console.log('Queueing controller initialised. 👻')
  }
  @Get()
  greet(): string {
    return `This is Queue Route 👋`
  }

  @Get(':id')
  handleQueue() {
    console.log('Handle Queue called from controller')
    this.service.addItemToQueue()
  }

}
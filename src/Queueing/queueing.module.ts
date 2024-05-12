import { Module } from "@nestjs/common";
import { QueueingConsumer } from "./queueing.processor";
import { QueueingController } from "./queueing.controller";
import { BullModule } from "@nestjs/bull";
import { QueueingService } from "./queueing.service";

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379
      }
    }),
    BullModule.registerQueue({
      name: 'handle_queue'
    })
  ],
  controllers: [QueueingController],
  providers: [QueueingConsumer, QueueingService],
  // exports: [QueueingService]
})

export class QueueingModule {
  constructor() {
    console.log('Queueing module initialised. ⚡')
  }
}
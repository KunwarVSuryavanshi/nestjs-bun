import { Logger, Module } from "@nestjs/common";
import { QueueingConsumer } from "./queueing.processor";
import { QueueingController } from "./queueing.controller";
import { BullModule } from "@nestjs/bull";
import { QueueingService } from "./queueing.service";

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: '172.17.0.2',
        port: 6379,
        // maxRetriesPerRequest: null,
      }
    }),
    BullModule.registerQueue({
      name: 'handle_queue'
    })
  ],
  controllers: [QueueingController],
  providers: [QueueingConsumer, QueueingService, Logger],
  // exports: [QueueingService]
})

export class QueueingModule {
  constructor() {
    console.log('Queueing module initialised. ⚡')
  }
}
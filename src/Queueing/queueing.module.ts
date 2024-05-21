import { Logger, Module } from "@nestjs/common";
import { QueueingConsumer } from "./queueing.processor";
import { QueueingController } from "./queueing.controller";
import { BullModule } from "@nestjs/bull";
import { QueueingService } from "./queueing.service";
import { BULL_BOARD_ADAPTER, BullBoardModule } from "@bull-board/nestjs";
import { BullMQAdapter } from "@bull-board/api/bullMQadapter";

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: '0.0.0.0', // localhost (docker ps)
        port: 6379,
        // maxRetriesPerRequest: null,
      }
    }),
    BullModule.registerQueue({
      name: 'handle_queue'
    }),
    BullBoardModule.forFeature({
      name: 'handle_queue',
      adapter: BullMQAdapter
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
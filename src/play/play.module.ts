import { Module } from '@nestjs/common';
import { PlayController } from './play.controller';
import { PlayService } from './play.service';

const dynamicImport = async (packageName: string) =>
  new Function(`return import('${packageName}')`)();

@Module({
  imports: [],
  providers: [
    {
      provide: PlayService,
      async useFactory() {
        return new PlayService((await dynamicImport('webtorrent')).default);
      },
    },
  ],
  controllers: [PlayController],
})
export class PlayModule {}

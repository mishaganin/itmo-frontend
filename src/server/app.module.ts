import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: true }),
      /* значение null сообщает nest-next
          искать экраны в корне pages */
      { viewsDir: null }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

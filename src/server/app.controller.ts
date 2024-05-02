import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  home() {
    console.log('returned home');
    return {};
  }

  @Get('/posts')
  @Render('posts')
  posts() {
    console.log('returned posts');
    return {};
  }

  @Get('/create-post')
  @Render('post-creation')
  postCreation() {
    console.log('returned post-creation');
    return {};
  }
}

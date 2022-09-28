import { Controller, Get, Sse, MessageEvent } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Sse('/sse')
  sse(): Observable<MessageEvent> {
    console.log('received');

    return this.appService.subscribe();
    // interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
    // this.appService.subscribe();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

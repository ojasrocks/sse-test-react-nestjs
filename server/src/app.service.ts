import { Injectable, MessageEvent } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { from, fromEvent, Observable, Subject } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2) {}
  private events = new Subject<MessageEvent>();

  getHello(): string {
    this.events.next({ data: 'new step' });
    return 'Hello World!';
  }
  subscribe(): Observable<MessageEvent> {
    return this.events.asObservable();
  }
}

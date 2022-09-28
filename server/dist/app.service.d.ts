import { MessageEvent } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable } from 'rxjs';
export declare class AppService {
    private readonly eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    private events;
    getHello(): string;
    subscribe(): Observable<MessageEvent>;
}

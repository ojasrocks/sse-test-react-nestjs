import { MessageEvent } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sse(): Observable<MessageEvent>;
    getHello(): string;
}

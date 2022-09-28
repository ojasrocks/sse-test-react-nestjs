import { Injectable, MessageEvent } from "@nestjs/common";
import { Observable, Subject } from "rxjs";

@Injectable()
export class AppService {
  private events = new Subject<MessageEvent>();

  getHello(): string {
    this.events.next({ data: "next step" });
    return "Hello Monaco!";
  }
  subscribe(): Observable<MessageEvent> {
    return this.events.asObservable();
  }
}

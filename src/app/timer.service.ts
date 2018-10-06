import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TimerService {
  subject: BehaviorSubject<string>;
  constructor() {
    this.subject = new BehaviorSubject("");
  }
}

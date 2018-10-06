import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  records: Array<string>;
  constructor(private tService: TimerService) {
    this.records = new Array<string>();
   }

  ngOnInit() {
    this.getRecord();
  }

  getRecord() {
    this.tService.subject.subscribe(msg => {

      console.log(msg);
      this.records.push(msg);
    });
  }
}

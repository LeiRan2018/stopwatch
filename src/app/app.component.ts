import { Component } from '@angular/core';
import { timer } from 'rxjs';
// import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stopwatch'
  source;
  subscribe;
  hour = 0;
  min = 0;
  sec = 0;
  mis = 0;
  constructor() {
    /*
      timer takes a second argument, how often to emit subsequent values
      in this case we will emit first value after 1 second and subsequent
      values every 2 seconds after
    */
    this.source = timer(0, 10);
    //output: 0,1,2,3,4,5......
  }

  //emit 0 after 1 second then complete, since no second argument is supplied
  start() {
    this.subscribe = this.source.subscribe(val => {
      this.mis = val % 100;

      var new_sec = Math.floor(val / 100);
     
      var temp = Math.floor(new_sec / 60);
      this.sec = (new_sec) % 60;
      
      if (temp == 0) {

      } else if (temp < 60) {
        this.min = temp;
      } else if (temp >= 60) {
        this.min = temp % 60;
        // temp = Math.floor(temp /60);
        this.hour = Math.floor(temp / 60);
      }
    });
  }
  stop() {
    console.log('hello');
    this.subscribe.unsubscribe();
  }
  clear() {
    this.mis = 0;
    this.sec = 0;
    this.min = 0;
    this.hour = 0;
  }
}


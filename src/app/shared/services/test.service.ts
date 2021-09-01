import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private _time = 0;
  constructor() {
    this.interval();
  }

  ngOnInit() {

  }

  private intervalSubject = new Subject<any>();
  intervalObservable = this.intervalSubject.asObservable();
  interval = () => {
    setInterval(() => {
      this._time++;
      this.intervalSubject.next(this._time)
    }, 1000);
    // requestAnimationFrame(this.interval)
  }

}

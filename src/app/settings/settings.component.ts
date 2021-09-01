import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from '../shared/services/test.service'
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  time = 0;
  intervalSub: Subscription
  constructor(
    private TestService: TestService
  ) {
    this.intervalSub = this.TestService.intervalObservable.subscribe((param: any) => {
      this.time = param;
    })

  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {

    if (this.intervalSub) {
      this.intervalSub.unsubscribe();
    }
  }

}

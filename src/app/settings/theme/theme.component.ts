import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from '../../shared/services/test.service'

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

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

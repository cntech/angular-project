import { Component, NgZone } from '@angular/core';

import { StoreService } from './store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StoreService]
})
export class AppComponent {
  title = 'app works!';

  private storeUnsubscribe: () => void = () => {}

  constructor(private ngZone: NgZone, private storeService: StoreService) {}

  ngOnInit() {
    this.storeUnsubscribe = this.storeService.subscribe(this, this.ngZone)
  }

  ngOnDestroy() {
    this.storeUnsubscribe()
  }

  getState() {
    return this.storeService.getState()
  }

}

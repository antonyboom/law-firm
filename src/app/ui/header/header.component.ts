import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public scrollToAnchor(location: string, wait: number): void {
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }, wait);
    }

    this.appService.sendFragment(location);
  }

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.scrollToAnchor('home', 100);
  }

  clearPath(): void {
    // clear message
    this.appService.clearFragment();
  }

}

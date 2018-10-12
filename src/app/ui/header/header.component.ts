import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AppService} from '../../app.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ContactsComponent} from '../main/contacts/contacts.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

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
    private dialog: MatDialog,
    private appService: AppService,
    public snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.scrollToAnchor('home', 100);
  }

  openDialog() {
    this.dialog
      .open(ContactUsComponent, {
        width: '500px',
        hasBackdrop: true,
        autoFocus: false,
        panelClass: 'contact-us-panel',
        backdropClass: 'contact-us-backdrop'
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          console.log(result);
          this.appService
            .sendRequest(result)
            .subscribe(
              () => {
                this.snackBar.open('Ваше сообщение было отправлено!', '', {
                  duration: 3000
                });
              },
              () => {
                this.snackBar.open('Ваше сообщение было отправлено!', '', {
                  duration: 3000
                });
              });
        }
      });

  }

}

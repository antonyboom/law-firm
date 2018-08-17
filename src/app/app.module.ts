import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatToolbarModule
} from '@angular/material';
import { HeaderComponent } from './ui/header/header.component';
import { MainComponent } from './ui/main/main.component';
import { FooterComponent } from './ui/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './ui/main/home/home.component';
import { ServicesComponent } from './ui/main/services/services.component';
import { AboutComponent } from './ui/main/about/about.component';
import { ContactsComponent } from './ui/main/contacts/contacts.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DescriptionComponent } from './ui/main/services/desctiption/description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactsComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DescriptionComponent]
})
export class AppModule { }

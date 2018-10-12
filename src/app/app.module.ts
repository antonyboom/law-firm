import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatSnackBarModule,
  MatTabsModule,
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ContactUsComponent } from './ui/header/contact-us/contact-us.component';

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
    DescriptionComponent,
    ContactUsComponent
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
    MatMenuModule,
    MatTabsModule,
    MatSnackBarModule,

    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DescriptionComponent, ContactUsComponent]
})
export class AppModule { }

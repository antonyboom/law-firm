import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './ui/main/home/home.component';
import {ServicesComponent} from './ui/main/services/services.component';
import {AboutComponent} from './ui/main/about/about.component';
import {ContactsComponent} from './ui/main/contacts/contacts.component';
import {MainComponent} from './ui/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '',
        component: ServicesComponent
      },
      {
        path: '',
        component: AboutComponent
      },
      {
        path: '',
        component: ContactsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

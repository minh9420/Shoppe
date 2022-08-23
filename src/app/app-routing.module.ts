import { NewsComponent } from './news/news.component';
import { MyticketComponent } from './myticket/myticket.component';
import { LoginComponent } from './login/login.component';
import { HiringComponent } from './hiring/hiring.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hiring', component: HiringComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myticket/:myticketId', component: MyticketComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
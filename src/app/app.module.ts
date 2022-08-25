import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HiringComponent } from './hiring/hiring.component';
import { NewsComponent } from './news/news.component';
import { MyticketComponent } from './myticket/myticket.component';
import { LoginComponent } from './login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { TransformComponent } from './transform/transform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HiringComponent,
    NewsComponent,
    MyticketComponent,
    LoginComponent,
    TransformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

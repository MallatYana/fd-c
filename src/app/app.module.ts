import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageModule } from './pages/main-page/main-page.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterPageComponent } from './pages/register-page/register-page/register-page.component';
import { NotFoundPageModule } from './pages/not-found-page/not-found-page.module';
import { RegisterPageModule } from './pages/register-page/register-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MainPageModule,
    NgbTooltipModule,
    NotFoundPageModule,
    RegisterPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioThumbnailComponent } from './portfolio/portfolio-thumbnail/portfolio-thumbnail.component';
import { Error404Component } from './error404/error404.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HeroImageComponent } from './hero-image/hero-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PortfolioComponent,
    PortfolioThumbnailComponent,
    Error404Component,
    HeroImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

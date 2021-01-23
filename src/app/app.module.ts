import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginMordernComponent } from './login/login-mordern/login-mordern.component';
import { HomePageHeroComponent } from './hero/home-page-hero/home-page-hero.component';
import { FormsModule } from '@angular/forms';
import { HeroContentTextComponent } from './hero/hero-content-text/hero-content-text.component';
import { InfoContainerComponent } from './info-container/info-container.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BsFooterSocialmediaComponent } from './bs-footer-socialmedia/bs-footer-socialmedia.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { HeroSlantedComponent } from './hero/hero-slanted/hero-slanted.component';
import { LoginWithimageComponent } from './login/login-withimage/login-withimage.component';
import { LoginDarkComponent } from './login/login-dark/login-dark.component';
import { LoginSwapComponent } from './login/login-swap/login-swap.component';
import { SummaryPipe } from './summary.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UuidGeneratorComponent } from './uuid-generator/uuid-generator.component';
import { ImageCarousalComponent } from './image-carousal/image-carousal.component';
import { TextCarousalComponent } from './text-carousal/text-carousal.component';
import { DateToMilliesComponent } from './date-to-millies/date-to-millies.component';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    LoginMordernComponent,
    HomePageHeroComponent,
    HeroContentTextComponent,
    InfoContainerComponent,
    ProductListComponent,
    ProductGridComponent,
    ContactUsComponent,
    BsFooterSocialmediaComponent,
    MainContainerComponent,
    HeroSlantedComponent,
    LoginWithimageComponent,
    LoginDarkComponent,
    LoginSwapComponent,
    SummaryPipe,
    SideNavComponent,
    UuidGeneratorComponent,
    ImageCarousalComponent,
    TextCarousalComponent,
    DateToMilliesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

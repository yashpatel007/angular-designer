import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateToMilliesComponent } from './date-to-millies/date-to-millies.component';
import { HomePageHeroComponent } from './hero/home-page-hero/home-page-hero.component';
import { LoginDarkComponent } from './login/login-dark/login-dark.component';
import { LoginMordernComponent } from './login/login-mordern/login-mordern.component';
import { LoginSwapComponent } from './login/login-swap/login-swap.component';
import { LoginWithimageComponent } from './login/login-withimage/login-withimage.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UuidGeneratorComponent } from './uuid-generator/uuid-generator.component';


const routes: Routes = [
  { path: 'sidenav', component: SideNavComponent },
  { path: 'login', component: LoginSwapComponent },
  { path: '', component: MainContainerComponent },
  { path: 'uuid', component: UuidGeneratorComponent },
  { path: 'datetomillies', component: DateToMilliesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//routes
import { APP_ROUTING } from './app.routes';

//servicios 
import { HeroesService } from './servicios/heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

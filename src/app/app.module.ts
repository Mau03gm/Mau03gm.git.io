import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SkillsComponent } from './components/skills/skills.component';
=======
import { HeaderComponent } from './components/header/header.component';
>>>>>>> 0d9ad86bd716b55a116b3552a8c10c2609c552cc

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SkillsComponent
=======
    HeaderComponent
>>>>>>> 0d9ad86bd716b55a116b3552a8c10c2609c552cc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { AppComponent } from './app.component';
import { PowerComponentComponent } from './power-component/power-component.component';
import { HumanComponent } from './power-component/human/human.component';
import { SaiyanComponent } from './power-component/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './power-component/super-saiyan/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './power-component/super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './power-component/super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './power-component/super-saiyan-four/super-saiyan-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponentComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

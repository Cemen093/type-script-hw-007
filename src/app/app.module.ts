import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrakingDistanceCalculatorComponent } from './braking-distance-calculator/braking-distance-calculator.component';

@NgModule({
  declarations: [
    BrakingDistanceCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [BrakingDistanceCalculatorComponent]
})
export class AppModule { }

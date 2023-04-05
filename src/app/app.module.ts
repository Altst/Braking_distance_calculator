import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrakingDistanceCalculatorComponent } from './braking-distance-calculator/braking-distance-calculator.component';
import { StopWayCalcComponent } from './stop-way-calc/stop-way-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    BrakingDistanceCalculatorComponent,
    StopWayCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

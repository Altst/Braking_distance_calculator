import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-way-calc',
  templateUrl: './stop-way-calc.component.html',
  styleUrls: ['./stop-way-calc.component.scss']
})
export class StopWayCalcComponent {
  killometrs: string = '';
  weight: string = '';
  res: number = 0;
  Calc(){
    
    var metrSec:number = parseInt(this.killometrs)*1000/3600;
    this.res =  Math.round(Number((metrSec^2/(2*0.7*9.81)) + (metrSec * (metrSec / (2 * 0.7 * 9.81 * (1500 / parseInt(this.weight)))))));
  }
}

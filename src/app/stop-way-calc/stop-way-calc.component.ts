import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-way-calc',
  templateUrl: './stop-way-calc.component.html',
  styleUrls: ['./stop-way-calc.component.scss']
})
export class StopWayCalcComponent {
  km: number = 0;
  weight: number = 0;
  res: number = 0;
  Calc(){
    var metrSec:number = this.km*1000/3600;
    this.res =  (metrSec^2/(2*0.7*9.81)) + (metrSec * (metrSec / (2 * 0.7 * 9.81 * (1500 / this.weight))))
    
  }
}

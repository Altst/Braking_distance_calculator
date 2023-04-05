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
    if(Number.isInteger(Number(this.killometrs)) && 
      Number.isInteger(Number(this.weight)) &&
      this.killometrs && this.weight && 
      Number(this.weight)>0 &&
      Number(this.killometrs)>0)
    {
      var metrSec:number = parseInt(this.killometrs)*1000/3600;
      this.res =  Math.round(Number((metrSec^2/(2*0.7*9.81)) + (metrSec * (metrSec / (2 * 0.7 * 9.81 * (1500 / parseInt(this.weight)))))));
    }
    else{
      console.log("Invalid Data!")
      alert('Invalid data!')
    }
  }
}

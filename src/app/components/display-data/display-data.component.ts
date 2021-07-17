import { EmployeeComponent } from './../employee/employee.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent  {
@Input()hello;
  // @ViewChild(ColorSampleComponent)
  // primarySampleComponent: ColorSampleComponent;
constructor(){
  console.log(this.hello);
}

}

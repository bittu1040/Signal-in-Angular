import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ChildComponent {
  randomNumber = 9; 
  interval: any;
  randomNumber1: any;
  currentNumber: number = 1;

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.randomNumber1= this.updateRandomNumber();
      if(this.randomNumber1<=8){
        console.log(this.randomNumber1)
      }else{
        console.log(this.randomNumber1)
        console.log("stop child")
        clearInterval(this.interval);
      }
    }, 1000); 
  }

  updateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; 
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  childTitle = 'Child Title';
  child() {
    console.log('child');
    return 'child';
  }
}

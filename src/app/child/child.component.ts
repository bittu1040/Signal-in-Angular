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
  randomNumber1: number | undefined;
  interval: any;

  constructor() {}

  ngOnInit() {
    this.updateRandomNumber(); 
    // this.interval = setInterval(() => {
    //   this.updateRandomNumber();
    // }, 5000);
  }

  updateRandomNumber() {
    this.randomNumber1 = Math.floor(Math.random() * 10) + 1; 
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

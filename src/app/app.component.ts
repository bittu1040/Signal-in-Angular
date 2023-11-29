import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ChildComponent } from './child/child.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { ParentComponent } from './parent/parent.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatSelectModule, ChildComponent, GrandparentComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { ngSkipHydration: 'true' },
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent implements OnInit {

  count = signal(2);
  number1 = signal(3);
  number2 = signal(4);
  computedCount = computed(() => this.number1() + this.number2());


  @ViewChild('firstname', { static: false }) firstNameInput?: ElementRef;
  @ViewChild('lastname', { static: false }) lastNameInput?: ElementRef;
  @ViewChild('firstname1', { static: false }) firstNameInput1?: ElementRef;
  @ViewChild('lastname1', { static: false }) lastNameInput1?: ElementRef;

  firstName = signal('Bittu');
  lastName = signal('Kumar');

  firstName1 = signal('Bittu');
  lastName1 = signal('Kumar');


  fullname = computed(() => this.firstName() + " " + this.lastName())
  fullname1 = computed(() => this.firstName1() + " " + this.lastName1())

  updateFirstName1() {
    if (this.firstNameInput1) {
      const firstNameValue1 = this.firstNameInput1.nativeElement.value;
      console.log(firstNameValue1);
      this.firstName1.set(firstNameValue1);
    }
  }

  updateLastName1() {
    if (this.lastNameInput1) {
      const lastNameValue1 = this.lastNameInput1.nativeElement.value;
      console.log(lastNameValue1);
      this.lastName1.set(lastNameValue1);
    }
  }

  constructor() {
    effect(() => {
      console.log("effect signal- Last updated value", this.count())
    })
  }

  updateFirstName() {
    if (this.firstNameInput) {
      const firstNameValue = this.firstNameInput.nativeElement.value;
      this.firstName.set(firstNameValue);
    }
  }

  updateLastName() {
    if (this.lastNameInput) {
      const lastNameValue = this.lastNameInput.nativeElement.value;
      this.lastName.set(lastNameValue);
    }
  }

  randomNumber1: any;
  currentNumber: number = 1;
  interval: any;

  ngOnInit(): void {
    console.log("start", this.count());

    this.count.set(3);
    console.log("after set signal", this.count());

    this.count.update((data: number) => {
      return data * 2;
    })
    console.log("after update signal", this.count());

    console.log("computed signal", this.computedCount())

    // this.interval = setInterval(() => {
    //   this.randomNumber1= this.updateRandomNumber();
    //   if(this.randomNumber1<=8){
    //     console.log(this.randomNumber1)
    //   }else{
    //     console.log(this.randomNumber1)
    //     console.log("stop")
    //     clearInterval(this.interval);
    //   }
    // }, 1000); 
  }

  updateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

}

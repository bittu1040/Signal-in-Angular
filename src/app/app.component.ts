import { ChangeDetectionStrategy, Component, OnInit, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ChildComponent } from './child/child.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { ParentComponent } from './parent/parent.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatInputModule,MatFormFieldModule, FormsModule, ReactiveFormsModule,MatSelectModule, ChildComponent, GrandparentComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {ngSkipHydration: 'true'},
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent implements OnInit{

count= signal(2);
number1= signal(3);
number2= signal(4);

computedCount=  computed(()=> this.number1()+ this.number2());

firstName= signal('bittu');
lastName= signal('kumar');

fullname= signal("Bittu Kumar");


constructor() {
  effect(()=>{
    console.log("effect signal- Last updated value",this.count())
  })
}

updateFirstName(){

}

updateLastName(){
  
}

ngOnInit(): void {
  console.log("start", this.count());

  this.count.set(3);
  console.log("after set signal", this.count());

  this.count.update((data:number)=>{
    return data*2;
  })
  console.log("after update signal", this.count());

  console.log("computed signal",this.computedCount())

}


}

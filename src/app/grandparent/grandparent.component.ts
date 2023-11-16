import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from '../parent/parent.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grandparent',
  standalone: true,
  imports: [CommonModule, ParentComponent, FormsModule],
  templateUrl: './grandparent.component.html',
  styleUrl: './grandparent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandparentComponent {

  title = 'Title';
  constructor() {}

  ngOnInit() {}

  grandparent() {
    console.log('grandparent');
    return 'grandparent';
  }

}

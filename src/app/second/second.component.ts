import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],

  // This is used for the stop the automatic change detection...
  changeDetection: ChangeDetectionStrategy.OnPush,

  // This is used for the automatic change the detection but by default it is on so we dont need to specify it.
  // changeDetection: ChangeDetectionStrategy.Default,

})
export class SecondComponent {

  @Input() data!:any;

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {

  data={
    name:'Shingadiya Ravi'
  }

  /* This means we are here change the reference of data object into this method.we can set only value but that can not to affect and angular not detect that change. the angular only detect te reference change.*/
  change(temp:any){
    this.data={
      name:temp
    }
  }

  /* It will not work because here we only change the value but not change the reference so. */
  // change(temp:any):void{
  //   this.data.name=temp
  // }
}

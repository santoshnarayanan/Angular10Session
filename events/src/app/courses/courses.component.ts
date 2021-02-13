import { Component} from '@angular/core';


@Component({
  selector: 'courses',
  template:`
            <img [src]="imageUrl"/>
            <table>
            <tr>
            <td [attr.colspan]="colSpan"></td>
            </tr>
            </table>
            <br />
            <button class="btn btn-primary" [class.active]="isActive">Save</button>
            <button class="btn btn-primary" [style.backgroundColor]="isActive? 'orange': 'green'">Submit</button>
            <button (click)="onClick()">Click</button>
            `
})
export class CoursesComponent{

  title = "List of courses";
  imageUrl = "http://lorempixel.com/400/200";
  colSpan =2;
  isActive = false;

  onClick(){
    console.log("Clicked on button");
  }
}

import {Component} from "@angular/core";

@Component({
  selector: 'app-heroes',
  template: '<p>Heroes Component from here, and inline template here <p>' +
    '<button [disabled]="isDisabled" (click) = "toggleButton($event)"> Property binding button, click here and see the magic</button>' +
    '<button [disabled] = "!isDisabled" (click)="toggleButton($event)"> Property binding button, click here and see the magic</button>', /* templateUrl: './heroes.component.html', */
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  isDisabled: boolean = false;


  toggleButton(event: any) {

    console.log(event)
    this.isDisabled = !this.isDisabled
  }

}

import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Refresh angular concepts - LK';
  variable1 = 1;
  variable2 = 2;
  variable3: number = 3;

  @Output() toParent: string = '';


  // variable4: number;  lk this won't work

  getSum(): number {
    return this.variable1 + this.variable2
  }

  // getSum2: any { is invalid method.
  classes: any = 'special';
  toChild: any = 'take this from parent';

  getSum2(): any {
    return "\"Tour of heroes\""
  }

  getStyle(): any {
    return "color: darkviolet"
  }

  giveItToChild() {
    return this.toChild;
  }
}

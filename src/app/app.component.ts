import {Component} from '@angular/core';

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

  fromParentThoughEvent: any;

  // variable4: number;  lk this won't work

  getSum(): number {
    return this.variable1 + this.variable2
  }

  // getSum2: any { is invalid method.
  classes: any = 'special';
  toChild: any = 'variable1 = ' + this.variable1;

  getSum2(): any {
    return "\"Tour of heroes\""
  }

  getStyle(): any {
    return "color: darkviolet"
  }

  giveItToChild() {
    return this.toChild;
  }

  printMessageFromChild(event: any) {
    console.log(event);
    this.fromParentThoughEvent = event;

  }
}

import {Component, Input} from "@angular/core";


@Component({selector: 'data-sharing', templateUrl: './data-sharing.component.html'})
export class DataSharingComponent {

  @Input() fromParent: string = '';

  @Input() fromParent2: number = 0;

  constructor() {

  }
}

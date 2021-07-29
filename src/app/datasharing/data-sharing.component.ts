import {Component, EventEmitter, Input, Output} from "@angular/core";


@Component({selector: 'data-sharing', templateUrl: './data-sharing.component.html'})
export class DataSharingComponent {

  @Input() fromParent: string = '';

  @Input() fromParent2: number = 0;

  styleFromTS: string = 'lightsalmon';

  @Output() fromChildToParentEvent = new EventEmitter();

  constructor() {

  }

  sendDataToParent() {

    this.fromChildToParentEvent.emit("hello");
  }

}

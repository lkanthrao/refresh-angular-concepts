import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customtable',
  templateUrl: './customtable.component.html',
  styleUrls: ['./customtable.component.css']
})
export class CustomtableComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() borderSize: number = 0;

}

import {Component, OnInit} from "@angular/core";
import {Observable, Subscriber} from 'rxjs';


@Component({selector: "app-digforms", templateUrl: "./digforms.component.html", providers: []})
export class DigformsComponent implements OnInit {
  private parameter: Subscriber<unknown> | undefined;


  ngOnInit(): void {

    /*   var subscribeToObservable = subscribeToObservableFunction(parameter: Subscriber<unknown>)
       {
         parameter.next(1);
         parameter.next(2);
       }*/

    let count: number = 0;

    const observable = new Observable(function subscriberFunction(pSubscriber) {
      pSubscriber.next(1);
      pSubscriber.next(2);

      setInterval(() => {
        // console.log("timer from oberver every min" + new Date())
        pSubscriber.next("timer from oberver every min " + count);
        count++;
      }, 1000);

      setInterval(() => {
        console.log("stopping the subscription")
        pSubscriber.unsubscribe();
      }, 3000)
    });

    observable.subscribe(function (x) {
      console.log(x);
    });

    observable.subscribe(function (x) {
      console.log(x + ' another observer');

    })

  }
}

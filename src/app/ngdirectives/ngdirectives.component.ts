import {Component, OnInit} from '@angular/core'
import {HeroesModel} from '../models/heroes.model';


@Component({selector: 'app-ngdirective', templateUrl: './ngdirectives.component.html', providers: []})
export class NGDirectivesComponent implements OnInit {


  heroes: HeroesModel[] = [];
  showOrhide: boolean = true;

  ngOnInit(): void {

    let hero1 = new HeroesModel();

    hero1.heroName = "hero1";
    hero1.heroRank = 5;
    hero1.heroTitle = "Mr";

    let heroe2 = new HeroesModel();

    heroe2.heroName = "hero2"
    heroe2.heroRank = 8
    heroe2.heroTitle = "Mr"

    this.heroes.push(hero1);
    this.heroes.push(heroe2);
  }


  mouseOverToMakeFieldFalse(): boolean {
    console.log(this.showOrhide + " is refreshed always")
    return false;
  }

  /*=========================================================================================*/

  /*var number: number  = 100; // compilation error, var and let to be used with in a method I guess

  let number1   = 100;  // compilation error, var and let to be used with in a method I guess*/

  variable(): void {

    let numberInfunction = 100;

    var x;

    var x; // this is ok, though x is already declared.

    let someNumber;

    /*let someNumber; // this is NOT ok, someNumber is already present on previous line.*/

  }

  /*f(x: any) {
    let x = 100; // error: interferes with parameter declaration
  }

  g() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
  }*/

  /*=========================================================================================*/

  justAnotherMethod() {
    for (let i = 0; i++; i < 10) {
      console.log(i);
    }
  }

  justAnotherMethod2(): string {
    const variable = "LK"
    // variable = "LKR"; /* this throws syntax error due to it' constant*/

    const numOfLives = 9;

    const kitty = {
      name: "Auara",
      numLives: numOfLives
    }

    /*  kitty = {                    //Error you can assign a const
        name: "Jolly",
        numOfLives: numOfLives
      }*/

    kitty.name = "katty";

    return kitty.name;

  }

  justAnotherMethod3(event: MouseEvent): void {
    var target = event.target as Element;

    if (target.id = "listId") {
      this.showOrhide = false;
    }


    let input = [1, 2];

    let first = input[0];
    let second = input[1];

    console.log(first + " and " + second);

    let input1 = [3, 4];

    let [anotherFirst, anotherSecond] = input1;

    console.log(anotherFirst + " and " + anotherSecond);

    [anotherFirst, anotherSecond] = [anotherSecond, anotherFirst];

    let input3 = [5, 6];

    let input4 = [6, 7, 'let can store string'];

    let jsonString = {
      key1: "value of key1",
      key2: "Value of ket2"
    };

    // let {value1, value2} = jsonString; // value1 will have "value of key1" and value2 so on.


  }

  /*=========================================================================================*/
}

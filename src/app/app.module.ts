import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {DataSharingComponent} from "./datasharing/data-sharing.component";
import { BoldDirective } from './directive/bold.directive';

@NgModule({
  providers: [],
  declarations: [AppComponent, HeroesComponent, DataSharingComponent, DataSharingComponent, BoldDirective],
  bootstrap: [AppComponent],
  exports: [
    DataSharingComponent
  ],
  imports: [BrowserModule, AppRoutingModule]
})
export class AppModule {

}

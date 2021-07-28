import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {DataSharingComponent} from "./datasharing/data-sharing.component";

@NgModule({
  providers: [],
  declarations: [AppComponent, HeroesComponent, DataSharingComponent, DataSharingComponent],
  bootstrap: [AppComponent],
  exports: [
    DataSharingComponent
  ],
  imports: [BrowserModule, AppRoutingModule]
})
export class AppModule {

}

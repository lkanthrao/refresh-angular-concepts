import { CommonModule } from "@angular/common";
import { ApplicationModule, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";

@NgModule({providers:[], declarations: [AppComponent, HeroesComponent], bootstrap:[AppComponent], imports:[BrowserModule, AppRoutingModule]})
export class AppModule {
  
}
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CounterHeaderComponent } from './counter-header/counter-header.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';

@NgModule({
  declarations: [AppComponent, CounterHeaderComponent, CounterButtonsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

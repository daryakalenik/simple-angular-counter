import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-counter-buttons",
  templateUrl: "./counter-buttons.component.html",
  styleUrls: ["./counter-buttons.component.scss"],
})
export class CounterButtonsComponent {
  @Input() counter: number;
  @Output() counterChanged = new EventEmitter<number>();

  increaseCounter() {
    this.counter++;
    this.counterChanged.emit(this.counter);
  }
  decreaseCounter() {
    this.counter = this.counter - 1;
    this.counterChanged.emit(this.counter);
  }
  resetCounter() {
    this.counter = 0;
    this.counterChanged.emit(this.counter);
  }
}

import { Component, Input } from "@angular/core";

@Component({
  selector: "app-counter-header",
  templateUrl: "./counter-header.component.html",
  styleUrls: ["./counter-header.component.scss"],
})
export class CounterHeaderComponent {
  @Input() counter: number;
}

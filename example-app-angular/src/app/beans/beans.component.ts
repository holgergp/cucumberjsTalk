import { Component, OnInit } from "@angular/core";
import { BohnenService } from "../bohnen.service";
import { Bohne } from "../types";

@Component({
  selector: "app-beans",
  templateUrl: "./beans.component.html",
  styleUrls: ["./beans.component.sass"]
})
export class BeansComponent implements OnInit {
  private bohnen: Bohne[];
  constructor(private bohnenService: BohnenService) {}

  ngOnInit() {
    this.getBohnen();
  }

  private getBohnen() {
    this.bohnenService.getBohnen().subscribe(bohnen => (this.bohnen = bohnen));
  }
  private alterBeans() {
    this.bohnenService.alterBohne();
  }

  private calculateLineFromEkp(event, id) {
    this.bohnenService.calculateLineFromChangeBohne({
      id,
      ekp: parseFloat(event.target.value)
    });
  }
  private calculateLineFromVkp(event, id) {
    this.bohnenService.calculateLineFromChangeBohne({
      id,
      vkp: parseFloat(event.target.value)
    });
  }

  private calculateLineFromRabatt(event, id) {
    this.bohnenService.calculateLineFromChangeBohne({
      id,
      rabatt: parseFloat(event.target.value)
    });
  }
}

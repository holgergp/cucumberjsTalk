import { Component, OnInit } from "@angular/core";
import { BohnenService } from "../bohnen.service";
import { Bohne } from "../types";

@Component({
  selector: "app-beans",
  templateUrl: "./beans.component.html",
  styleUrls: ["./beans.component.scss"]
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

  private calculateLineFromEkp(event, id) {
    this.bohnenService.calculateLineFromChangeBohne({
      id,
      ekp: event.target.value
    });
  }
  private calculateLineFromVkp(event, id) {
    this.bohnenService.calculateLineFromChangeBohne({
      id,
      vkp: event.target.value
    });
  }

  private calculateLineFromRabatt(event, id) {
    this.bohnenService.calculateLineFromChangeBohne({
      id,
      rabatt: event.target.value
    });
  }
}

import { Injectable } from "@angular/core";
import { BOHNEN } from "./bohnen";
import { BehaviorSubject, Observable } from "rxjs";
import { Bohne, ChangeBohne } from "./types";

@Injectable({
  providedIn: "root"
})
export class BohnenService {
  private bohnenDB: BehaviorSubject<Bohne[]>;

  constructor() {
    this.bohnenDB = new BehaviorSubject(BOHNEN);
  }

  getBohnen(): Observable<Bohne[]> {
    console.log("this.bohnenDB", this.bohnenDB);
    return this.bohnenDB;
  }

  alterBohne(): void {
    this.bohnenDB.next(BOHNEN.map(b => ({ ...b, art: "Kenya" })));
  }

  calculateLineFromChangeBohne(change: ChangeBohne) {
    const bohneFromDB = this.bohnenDB.value.find(b => b.id === change.id);
    const bohneWithChange = { ...bohneFromDB, ...change };

    const rabatt = bohneWithChange.rabatt || 0.0;
    const vkp = parseFloat(bohneWithChange.vkp.toFixed(2));
    const vkpRabatt = parseFloat((vkp - vkp * (rabatt / 100)).toFixed(2));
    const ekp = parseFloat(bohneWithChange.ekp.toFixed(2));
    const marge = parseFloat(((vkpRabatt / ekp - 1) * 100).toFixed(2));
    const calculatedBohnen: Bohne[] = BOHNEN.map(b => {
      if (b.id === bohneWithChange.id) {
        return {
          ...b,
          rabatt,
          vkp,
          vkpRabatt,
          ekp,
          marge
        };
      } else return b;
    });
    this.bohnenDB.next(calculatedBohnen);
  }
}

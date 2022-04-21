import { Component, OnInit } from "@angular/core";
import { FruitTableViewModel } from "./fruit-table-view-model";

@Component({
  selector: "app-fruit-table",
  templateUrl: "./fruit-table.component.html",
  styleUrls: ["./fruit-table.component.scss"],
  providers: [FruitTableViewModel],
})
export class FruitTableComponent implements OnInit {
  columnsToDisplay = [
    "id",
    "name",
    "genus",
    "calories",
    "carbohydrates",
    "sugar",
  ];


  valueChanged(event: Event ): void {
    let value = (event.target as HTMLInputElement).value;
    //i'm filtering fruitData$ from fruit-table-view-model
    let filtered = this.viewModel.fruitData$.value.filter((fruit) => {
      return fruit.name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      fruit.genus.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      fruit.family.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      fruit.order.toLowerCase().indexOf(value.toLowerCase()) > -1
    })
    //this is like the react setter, the initial value is filteredFruit$ which are the fruits
    this.viewModel.filteredFruit$.next(filtered)
  }

  sortBy(event: HTMLInputElement): void {
    console.log("event", event)
    let value = event.value
    let sorted: any;
    switch(value) {
      case "nameAse":
          sorted = this.viewModel.filteredFruit$.value.sort((a, z) => {
          if(a.name < z.name){
            return -1;
          }else if (a.name > z.name){
            return 1;
          }else{
            return 0;
          }
        })
        break;
      case "nameDes":
       sorted = this.viewModel.filteredFruit$.value.sort((a, z) => {
          if(a.name < z.name){
            return 1;
          }else if (a.name > z.name){
            return -1;
          }else{
            return 0;
          }
        })
        break;
        case "carbsAse":
          sorted = this.viewModel.filteredFruit$.value.sort((a, z) => {
            return a.nutritions.carbohydrates - z.nutritions.carbohydrates
          })
          break;
          case "carbsDes":
            sorted = this.viewModel.filteredFruit$.value.sort((a, z) => {
              return z.nutritions.carbohydrates - a.nutritions.carbohydrates
            })
      default:
            break
    }
    this.viewModel.filteredFruit$.next(sorted)
  }

  constructor(public viewModel: FruitTableViewModel) {}

  ngOnInit(): void {}
}
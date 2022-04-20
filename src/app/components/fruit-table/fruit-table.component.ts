import { Component, OnInit } from '@angular/core';
import {FruitTableViewModel} from './fruit-table-view-model';

@Component({
  selector: 'app-fruit-table',
  templateUrl: './fruit-table.component.html',
  styleUrls: ['./fruit-table.component.scss'],
  providers: [FruitTableViewModel]
})
export class FruitTableComponent implements OnInit {
  columnsToDisplay = ['id', 'name', 'genus', 'calories', 'carbohydrates', 'sugar'];

  value : any;
 
  valueChanged():void{
    console.log(this.value)
    switch(this.value){
      case 'calories':
        this.columnsToDisplay = ['calories'];
        break;
        case 'carbohydrates':
          this.columnsToDisplay = ['carbohydrates'];
          break;
          case 'sugar':
            this.columnsToDisplay = ['sugar'];
            break;
            case 'genus':
        this.columnsToDisplay = ['genus'];
        break;
        case 'name':
        this.columnsToDisplay = ['name'];
        break
        case 'id':
          this.columnsToDisplay = ['id'];
          break;   
        break;    
      default:
          this.columnsToDisplay = ['id', 'name', 'genus', 'calories', 'carbohydrates', 'sugar'];
    }
  }

  constructor(public viewModel: FruitTableViewModel) {
    
  }

  ngOnInit(): void {
  }
}

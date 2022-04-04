// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Currency } from 'src/app/model/Currency';
import { DropdownModule } from 'primeng/dropdown';
import { PLATFORM_ID } from '@angular/core';
import { ConvertService } from 'src/app/services/convert.service';


@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  constructor(public converServuce: ConvertService) { }
  coins = [{ "id": "1", "name": "ILS", "valueAgainstTheDollar": 3.543738 }, { "id": "2", "name": "USD", "valueAgainstTheDollar": 1.114085 },
  { "id": "3", "name": "EUR", "valueAgainstTheDollar": 1 }]
  previousCalculations: any[] = []
  numToConvert: any
  soursCurrency: any
  targetCurrency: any
  resolve: any
  calculate() {
    this.resolve = (this.numToConvert).toString() + " " + this.soursCurrency.name + " = " + (this.numToConvert / this.soursCurrency.valueAgainstTheDollar * this.targetCurrency.valueAgainstTheDollar).toString() + " " + this.targetCurrency.name;
    this.converServuce.addCalculat(this.resolve);
  }

  ngOnInit(): void {
  }

}

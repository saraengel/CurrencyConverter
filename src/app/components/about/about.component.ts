import { Component, OnInit } from '@angular/core';
import { ConvertService } from 'src/app/services/convert.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  previousCalculations:any[]=[];
  constructor(public convertService:ConvertService) { }

  ngOnInit(): void {
  //  this.convertService.GetListOfClothForCompany();
    this.previousCalculations=this.convertService.getPreviousCalculations();
    console.log("previousCalculations    "+this.previousCalculations)
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {
  previousCalculations:any[] =[] 
  private url = "http://api.exchangeratesapi.io/v1/latest?access_key=36857bf9ac4b2eec5e17d5088ff1536e";
constructor(){}
  // constructor(private http:HttpClient) { }
  
  addCalculat(resolve:any){
    this.previousCalculations.push(resolve);
  }
  getPreviousCalculations(){
    return this.previousCalculations;
  }
  // GetListOfClothForCompany():Observable<any>{                
  //   debugger;
  //       return this.http.get(this.url);
  //     }
}

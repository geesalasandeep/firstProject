import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {  }

  places = [
    {
      countryName : 'India',
      capital : 'NewDelhi',
      currency : 'rupee'
    },
    
      {
        countryName : 'USA',
        capital : 'Washington DC',
        currency : 'Dollor'
      },
      {
        countryName : 'U.K',
        capital : 'London',
        currency : 'Pounds'
      },
      {
        countryName : 'Pakistan',
        capital : 'Islamabad',
        currency : 'Rupees'
      }
    
  ]


  onRequest(data){
    console.log(`hello ${data}`);
  }
  callingFromHtml(){
    console.log("this method called from html");
    
  }

}

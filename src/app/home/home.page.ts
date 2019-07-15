import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http : HttpClientModule) {
    this.calculate();
  }
  async calculate(a,b){
    // let response = await<any> this.http.get('').toPromise();
    // console.log(response);
    // this.calculate = response.results;

    console.log('ตัวตั้ง', a ,"ตัวบวก" ,b)
    let url = "https://nextflow-node-calculator-api.azurewebsites.net/calculator/plus";
  }

}

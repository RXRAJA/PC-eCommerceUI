import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pc-ecommerce';
  products: object[] = [];

  constructor(private http:HttpClient){

  }

  ngOnInit() {
    const url = '../../assets/data/test-data.json';
    this.http.get(url).subscribe((response: any) => {
      this.products = response.results;
      console.log(this.products, '##############')
    })
  }
}

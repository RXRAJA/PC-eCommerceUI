import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  @Input() product: any = {};

  constructor() {

  }

  ngOnInit(): void {
console.log(this.product.product,'$$')
  }

}

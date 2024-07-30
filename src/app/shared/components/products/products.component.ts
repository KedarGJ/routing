import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../model/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prodData !: Array<Iproduct>
  constructor(
    private _productsService:ProductsService
  ) { }

  ngOnInit(): void {
    this.prodData = this._productsService.fetchAllProducts()
  }

}

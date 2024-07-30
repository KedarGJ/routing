import { Injectable } from '@angular/core';
import { Iproduct } from '../model/products';
import { Route, Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  prodArr : Array<Iproduct>=[
    {
      pname:"Samsung M31",
      pid:"123",
      pstatus:"In-Progress",
      canReturn : 1,
    },
    {
      pname:"Samsung S23",
      pid:"124",
      pstatus:"Dispatched",
      canReturn : 1,

    },
    {
      pname:"Samsung S24",
      pid:"125",
      pstatus:"Delivered",
      canReturn : 1,

    }
  ]
  constructor(
    private _router : Router,
    private _snackbar : SnackBarService
  ) { }

  fetchAllProducts(){
    //api call to get all products
    return this.prodArr
  }

  getProductDetails(id:string) : Iproduct{
    // api call to get single user details
    return this.prodArr.find(prod => prod.pid === id) as Iproduct
  }

  addProduct(product : Iproduct){
    //API call to add new product in DB
    this.prodArr.push(product);
    this._router.navigate(['/products']);
    this._snackbar.openSnackBar(`Product ${product.pname} is added`)
  }

  updateProduct(updatedProdObj : Iproduct){
    //api call to update a product
    let getIndex = this.prodArr.findIndex(prod =>
      prod.pid === updatedProdObj.pid);

      this.prodArr[getIndex] = updatedProdObj;
      this._router.navigate(['/products']);
      this._snackbar.openSnackBar(`the prtoduct${updatedProdObj.pname} is updated successfully`)
    }

    removeProduct(prodId:string){
      let getIndex  =this.prodArr.findIndex(prod=>prod.pid===prodId);
      let removeProduct = this.prodArr[getIndex]
      this.prodArr.splice(getIndex,1);
      this._router.navigate(['/products'])
      this._snackbar.openSnackBar(`product ${removeProduct.pname} is removed`)
    }
  }


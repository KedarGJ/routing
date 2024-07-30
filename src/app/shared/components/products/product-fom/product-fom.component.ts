import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-fom',
  templateUrl: './product-fom.component.html',
  styleUrls: ['./product-fom.component.scss']
})
export class ProductFomComponent implements OnInit {
  prodForm !: FormGroup;
  isinEditMode : boolean = false 
  productId !: string //undefined >> falsyvalue
  productObj !:Iproduct;
  canEditParams !: number;
  constructor(
    private _uuidService : UuidService,
    private _productService : ProductsService,
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
  this.createProdForm();
   this.patchproductdata();
    this.canEditParams = +this._routes.snapshot.queryParams['canEdit'];
    if(this.canEditParams === 0){
      this.prodForm.disable()

    }else{
      this.prodForm.enable()
    }
  }

  patchproductdata(){
    this.productId = this._routes.snapshot.params['productId']
    if(this.productId){
      this.isinEditMode = true;
      this.productObj = this._productService.getProductDetails(this.productId);
      this.prodForm.patchValue(this.productObj)
    }else{
      this.isinEditMode = false;
    }
  }

  createProdForm(){
    this.prodForm = new FormGroup({
      pname: new FormControl(null,[Validators.required]),
      pstatus: new FormControl(null,[Validators.required]),
      canReturn: new FormControl(null,[Validators.required]),
  })
  }

  onProdAdd(){
    if(this.prodForm.valid){
      let canReturnval = +this.prodForm.get('canReturn')?.value;
      let newProd : Iproduct = {...this.prodForm.getRawValue(), 
        pid:this._uuidService.uuid(), canReturn: canReturnval};
        this._productService.addProduct(newProd)
     }
  }

  onProdUpdate(){
    if(this.prodForm.valid){
      let canReturnval = +this.prodForm.get('canReturn')?.value;
      let updatedObj:Iproduct = {...this.prodForm.value, canReturn:canReturnval, pid:this.productId};
      this._productService.updateProduct(updatedObj)
    }
   }
}

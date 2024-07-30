import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { NoPageFoundComponent } from "./shared/components/no-page-found/no-page-found.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { UserFormComponent } from "./shared/components/users/user-form/user-form.component";
import { ProductFomComponent } from "./shared/components/products/product-fom/product-fom.component";
import { ProductComponent } from "./shared/components/products/product/product.component";



const routes : Routes= [
    {
        path : '',  //base Url or https://localhost:4200
        component : HomeComponent
    },
    {
        path :'home',  //base Url or https://localhost:4200/home
        component:HomeComponent
    },
    {
        path : 'users',      //https://localhost:4200/users
        component:UsersComponent
    },
    {
        path : 'users/addUser',      //https://localhost:4200/users
        component:UserFormComponent
    },
    {
        path : 'users/:userId',      //https://localhost:4200/users
        component:UserComponent
    },
    {
        path : 'users/:userId/editUser',      //https://localhost:4200/users
        component:UserFormComponent
    },
    {
        path : 'products',       // https://localhost:4200/products
        component: ProductsComponent
    },
    {
        path : 'products/addProduct',       // https://localhost:4200/products/addProduct
        component: ProductFomComponent
    },
    {
        path : 'products/:productId',       // https://localhost:4200/products
        component: ProductComponent
    },
    {
        path : 'products/:productId/editProduct',       // https://localhost:4200/products/addproduct
        component: ProductFomComponent
    },
    {
        path : "no-page-found",
        component: NoPageFoundComponent
    },
    {
        path: '**',
        component:NoPageFoundComponent
    },
    {
        path: '**',
        redirectTo:"no-page-found"
    }
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {

}
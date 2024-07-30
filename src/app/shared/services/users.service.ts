import { Injectable } from '@angular/core';
import { Iuser } from '../model/users';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr : Array<Iuser>=[
    {
      userName:'Jhon',
      userId : '123',
      userRole: 'Admin'
    },
    {
      userName:'Jen',
      userId : '124',
      userRole: 'buyer'
    },
    {
      userName:'Jen',
      userId : '125',
      userRole: 'Admin'
    }
  ]
  
  constructor(
    private _router : Router,
    private _snackbar : SnackBarService
  ) { }
  fetchAllUsers() : Array<Iuser>{
    //Api call to get users data
    return this.usersArr;
  }

  getUserInfo(id:string):Iuser{
    //Api callto get users info from db
    return this.usersArr.find(user => user.userId === id) as Iuser
  }

  addUser(user : Iuser){
    this.usersArr.push(user)
    this._router.navigate(['/users']);
    this._snackbar.openSnackBar(`Product ${user.userName} is added`)
  }

  updateUser(updateduserobj : Iuser){
    //api call to update a product
    let getIndex = this.usersArr.findIndex(user =>
      user.userId === updateduserobj.userId);

      this.usersArr[getIndex] = updateduserobj;
      this._router.navigate(['/users']);
      this._snackbar.openSnackBar(`the User ${updateduserobj.userName} is updated successfully`)
    }

    removeUser(userId:string){
      let getIndex  =this.usersArr.findIndex(user =>
        user.userId === userId);
      let removeUser = this.usersArr[getIndex]
      this.usersArr.splice(getIndex,1);
      this._router.navigate(['/users'])
      this._snackbar.openSnackBar(`User ${removeUser.userName} is removed`)
    }

}

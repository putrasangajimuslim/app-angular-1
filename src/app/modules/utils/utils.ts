import { Injectable } from '@angular/core';
import { Constant } from './constant/constant';

@Injectable({
  providedIn: 'root'
})
export class Utils {
  constant: any;

  constructor(
   
  ) {
    this.constant = Constant;
  }

  setLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  clearAllLocalstorage(): void {
    localStorage.clear();
  }

  // setLocalStorage(name: string, value: any): void{
  //   if(value instanceof Array){
  //     value = JSON.stringify(value);
  //     localStorage.setItem('isArray_'+name, 'true');
  //   }else{
  //     localStorage.setItem('isArray_'+name, '');
  //   }
  //   localStorage.setItem(name, value);
  // }

  // getLocalStorage(name: string): any{
  //   var data = localStorage.getItem(name);
  //   var isArray = localStorage.getItem('isArray_'+name);
  //   if(isArray == 'true'){
  //     data = JSON.parse(data);
  //   }
  //   return data;
  // }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoLibraryService {
  
  person: any= {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
  
  
  constructor() {}
public seviceMethod(){
return this.person
}
}
 


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  address:object
  constructor() { }

  ngOnInit(): void {
    this.address = {firstName:"sk", lastName:"ray", age:20, phone:1234567654};
    console.log(this.address)

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-demo-library',
  template: `
    <p>
      this is the data from DemoLibraryComponent....
    </p>
  `,
  styles: [
  ]
})
export class DemoLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

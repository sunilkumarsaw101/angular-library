import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{DemoLibraryService} from 'demo-library'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mylibrary';
  constructor(public LibraryService:DemoLibraryService, private route:Router) {}

  ngOnInit(){
    this.route.navigate(['/new-component']);
  
console.log(this.LibraryService.person)
}
}

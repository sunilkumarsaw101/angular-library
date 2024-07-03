import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoLibraryComponent } from './demo-library.component';
import { NewComponentComponent } from './new-component/new-component.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DemoLibraryComponent, NewComponentComponent],
  imports: [CommonModule, HttpClientModule
  ],
  exports: [DemoLibraryComponent, NewComponentComponent]
})
export class DemoLibraryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Child1Component,
    Child2Component,
    ParentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports:[
    ParentComponent
  ]
})
export class MainModule { }

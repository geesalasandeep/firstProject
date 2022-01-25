import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { Sample2Component } from './sample2/sample2.component';
import { MagicComponent } from './magic/magic.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TestComponent } from './test/test.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Query1Component } from './query1/query1.component';
import { Query2Component } from './query2/query2.component';
import { TableComponent } from './table/table.component';
import { ChangeColorDirective } from './change-color.directive';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { FilterDirective } from './filter.directive';
import { FilterPipe } from './filter.pipe';
import { PracticeComponent } from './practice/practice.component';
// import { ParkComponent } from './park/park.component';

@NgModule({
  declarations: [
    AppComponent,
    // Sample2Component,
    MagicComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    FirstComponent,
    SecondComponent,
    Query1Component,
    Query2Component,
    TableComponent,
    ChangeColorDirective,
    Parent1Component,
    Child1Component,
    FilterDirective,
    FilterPipe,
    PracticeComponent,
    // ParkComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

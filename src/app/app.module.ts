import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MountainsComponent } from './mountains/mountains.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { MountainDetailComponent } from './mountain-detail/mountain-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MountainsComponent,
    TableComponent,
    TableRowComponent,
    MountainDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

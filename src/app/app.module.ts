import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule,routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { EmployeeComponent } from './Components/employee/employee.component';
import { ShowEmpComponent } from './Components/employee/show-emp/show-emp.component';
import { EditEmpComponent } from './Components/employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './Components/employee/add-emp/add-emp.component';
import { DepartmentComponent } from './Components/department/department.component';
import { ShowDeptComponent } from './Components/department/show-dept/show-dept.component';
import { EditDeptComponent } from './Components/department/edit-dept/edit-dept.component';
import { AddDeptComponent } from './Components/department/add-dept/add-dept.component';
// import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {DepartmentService} from './services/department.service';
import {EmployeeService} from './services/employee.service';
import {MatTableModule,MatSortModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http'
import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
// import { AddDeptComponent } from '../add-dept/add-dept.component';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    DepartmentComponent,
    ShowDeptComponent,
    EditDeptComponent,
    AddDeptComponent,
    
  ],

  entryComponents:[AddDeptComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [DepartmentService,EmployeeService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

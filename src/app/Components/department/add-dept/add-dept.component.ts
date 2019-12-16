import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms'
import {DepartmentService} from '../../../services/department.service'

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.css']
})
export class AddDeptComponent implements OnInit {

  deptName = new FormControl('');

  constructor(public dialogRef: MatDialogRef<AddDeptComponent>,private http:DepartmentService) { }

  ngOnInit() {
  }

  cancel(){

    this.dialogRef.close()
  }

  createDept(){

  console.log(this.deptName.value)
  const data={
    department_name:this.deptName.value
  }
    this.http.addDept(data).subscribe(data=>{
      console.log(data)
    })
  }
}

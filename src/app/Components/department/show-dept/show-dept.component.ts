import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource,MatSort } from '@angular/material';
import { Department } from 'src/app/models/department-model';
import {DepartmentService} from '../../../services/department.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { AddDeptComponent } from '../add-dept/add-dept.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  listData:MatTableDataSource<any>;
  displayedColumn: string[]=['options','id','department_name']  

  constructor(private http:DepartmentService, public dialog : MatDialog) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.refreshDepList();
  }

  refreshDepList(){

    // var dummyData=[
    //   {id:1,department_name:"IT"},
    //   {id:2,department_name:"Finance"},
    //   {id:3,department_name:"Mechnical"}

    // ]

    // this.listData=new MatTableDataSource(dummyData)

    this.http.getDeptList().subscribe(data=>{

      let backendData=data;
      console.log(backendData["data"],'-------->');
      this.listData=new MatTableDataSource(backendData["data"]);
      console.log(this.listData);

      this.listData.sort=this.sort;
    })
  }

  applyFilter(filterEvent){

    console.log(filterEvent)
    this.listData.filter=filterEvent.target.value

  }
  onEdit(dept : Department){

    console.log(dept)
  }

  onDelete(id:number){

    console.log(id)
  }

  onRowClick(row){

    console.log(row)
  }

  addDept(){

    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true
    dialogConfig.autoFocus=true
    dialogConfig.panelClass="add-dept"
    dialogConfig.width="30%"
    let dialogRef=this.dialog.open(AddDeptComponent,dialogConfig)

    dialogRef.afterClosed().subscribe(result =>{
      console.log(result)
    })
  }

}

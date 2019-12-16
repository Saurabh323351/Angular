import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Department } from '../models/department-model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http : HttpClient) { }

  readonly baseUrl="http://127.0.0.1:8000/"
  // formContorlData:Department

  getDeptList(): Observable<Department[]>{

    return this.http.get<Department[]>(this.baseUrl+'dept_crud/')

  }

  addDept(data:{}){
  
    return this.http.post(this.baseUrl+'dept_crud/',data)
  }
}

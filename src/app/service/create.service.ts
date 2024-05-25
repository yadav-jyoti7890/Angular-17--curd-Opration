import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { create } from '../../../model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  
  constructor(private http:HttpClient) { }

  create(data:create){
    console.log("service"); 
    return this.http.post('http://localhost:3000/add', data);
  }

  viewlist(){
    return this.http.get<create[]>('http://localhost:3000/add');
    }

    deleteitem(id:number){
     return this.http.delete(`http://localhost:3000/add/${id}`);
    }

    itemget(id:string){
      return this.http.get<create>(`http://localhost:3000/add/${id}`);
    }

    PutItem(data:create){
     return this.http.put<create>(`http://localhost:3000/add/${data.id}`,data);
      }
}

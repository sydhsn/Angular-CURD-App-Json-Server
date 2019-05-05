import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userUrl="http://localhost:3000/users/";  
  userList:any =[];

  constructor(private http: HttpClient) {}

  
  getUserList() {
    return this.http.get(this.userUrl);
  }

  

}

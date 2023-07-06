import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cab } from 'src/app/models/cab';

@Injectable({
  providedIn: 'root'
})
export class CabService {
   
  formData:Cab;
  constructor(private httpClient:HttpClient) {}

  private baseUrl = 'http://localhost:8080/api/cab-management';
  //get All cabs
  getAllCabs(): Observable<Cab>{
    const url = `${this.baseUrl}/cabs`
    return this.httpClient.get<Cab>(url);
  }
}

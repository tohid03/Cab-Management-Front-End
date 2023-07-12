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
  getAllCabs(): Observable<Cab[]>{
    const url = `${this.baseUrl}/cabs`;
    return this.httpClient.get<Cab[]>(url);
  }
  
  //Add Cab
  addCab(cab:Cab): Observable<any>{
    const url = `${this.baseUrl}/cabs`;
    return this.httpClient.post(url,cab);
  }

  //Delete Cab
  deleteCab(cabId:number){
    const url = `${this.baseUrl}/cabs/${cabId}`;
    return this.httpClient.delete(url);
  }

  //Update Cab
  updateCab(cabId:number,cab:Cab):Observable<any>{
    const url = `${this.baseUrl}/cabs/${cabId}`;
    return this.httpClient.put(url,cab);
  }

  //Delete Cab Driver
  deleteCabDriver(id:number){
    const url = `${this.baseUrl}/cabs/removeCabDriver/${id}`;
    return this.httpClient.put(url,null);
  }

  //assign driver to cab
  assignDriver(driverId:number,cabId:number){
    const url = `${this.baseUrl}/cabs/${cabId}/driver/${driverId}`;
    return this.httpClient.put(url,null);
  }
}

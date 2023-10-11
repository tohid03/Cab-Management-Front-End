import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Driver } from 'src/app/models/driver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private baseUrl = 'http://localhost:8080/api/cab-management';
  formData: Driver;
  constructor(private httpClient: HttpClient) { }
  //Get Drivers
  getDrivers(): Observable<Driver[]> {
    const url = `${this.baseUrl}/drivers`
    console.log(url)
    return this.httpClient.get<Driver[]>(url);
  }
  //Add Drivers
  addDriver(driver: Driver): Observable<any> {
    const url = `${this.baseUrl}/drivers`
    return this.httpClient.post(url, driver)
  }
  //Update Driver
  updateDriver(id:number,driver:Driver):Observable<any>{
    const url = `${this.baseUrl}/drivers/${id}`
    return this.httpClient.put(url,driver);
  }
  //delete Driver
  deleteDriver(id:number):Observable<any>{
    const url =`${this.baseUrl}/drivers/${id}`
    return this.httpClient.delete(url);
  }

  //assign cab
  assignedCab(driverId:number,cabId:number){
    const url = `${this.baseUrl}/drivers/${driverId}/cab/${cabId}`
    return this.httpClient.put(url,null)
  }
  //remove assigned cab 
  unassignedCab(id:number){
    const url = `${this.baseUrl}/drivers/unassignedDriver/${id}`;
    return this.httpClient.delete(url);
  }

}
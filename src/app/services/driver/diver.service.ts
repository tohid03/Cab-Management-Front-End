import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Driver } from 'src/app/models/driver';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class DiverService {
  private baseUrl = 'http://localhost:8080/api/cab-management';
  formData: Driver;
  constructor(private httpClient: HttpClient) { }
  //Get Drivers
  getDrivers(pageIndex:number,pageSize:number): Observable<Driver[]> {
    const url = `${this.baseUrl}/drivers?pageNo=${pageIndex}&pageSize=${pageSize}`
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

}
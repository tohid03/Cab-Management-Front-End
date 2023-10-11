import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Driver } from 'src/app/models/driver';
import { CabService } from 'src/app/services/cab/cab.service';
import { DriverService } from 'src/app/services/driver/driver.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-assign-driver',
  templateUrl: './assign-driver.component.html',
  styleUrls: ['./assign-driver.component.css']
})
export class AssignDriverComponent {
 constructor(private driverService:DriverService,private cabService:CabService,
  public dialogBox: MatDialogRef<AssignDriverComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any){}
 
 
  public drivers:Driver[];
  public cabId = this.data.id;
ngOnInit(){
  this.getDrivers();
}

 getDrivers(){
  this.driverService.getDrivers().subscribe((res)=>{
    this.drivers = res;
  })
 }
 onSelectDriver(cabId:number,driverId:number){
      this.cabService.assignDriver(driverId,cabId).subscribe((res)=>{
        this.dialogBox.close(true)
        console.log(res)
      },(err)=>{
        console.log(err);
      })
 }
}

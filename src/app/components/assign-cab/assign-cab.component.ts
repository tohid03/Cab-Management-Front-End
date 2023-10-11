import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CabService } from 'src/app/services/cab/cab.service';
import { DriverService } from 'src/app/services/driver/driver.service';
import { Cab } from 'src/app/models/cab';

@Component({
  selector: 'app-assign-cab',
  templateUrl: './assign-cab.component.html',
  styleUrls: ['./assign-cab.component.css']
})
export class AssignCabComponent {
    constructor(private cabService:CabService,private driverService:DriverService,
     public dialogBox: MatDialogRef<AssignCabComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any){}
    
    
     public cabs:Cab[];
     public driverId = this.data.id;
   ngOnInit(){
     this.getDrivers();
   }
   
    getDrivers(){
     this.cabService.getAllCabs().subscribe((res)=>{
       this.cabs = res;
     })
    }
    onSelectCab(driverId:number,cabId:number){
         this.driverService.assignedCab(driverId,cabId).subscribe((res)=>{
           this.dialogBox.close(true)
           console.log(res)
         },(err)=>{
           console.log(err);
         })
    }
   }

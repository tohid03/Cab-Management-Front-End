import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Cab } from 'src/app/models/cab';
import { CabService } from 'src/app/services/cab/cab.service';
import { AddCabComponent } from '../add-cab/add-cab.component';
import { AssignDriverComponent } from '../assign-driver/assign-driver.component';

@Component({
  selector: 'app-view-cab',
  templateUrl: './view-cab.component.html',
  styleUrls: ['./view-cab.component.css']
})
export class ViewCabComponent {
   constructor(private cabService:CabService, private dialog:MatDialog){}
   cabs:Cab[];

   ngOnInit(){
    this.getAllCabs();
   }
  
   getAllCabs(){
    this.cabService.getAllCabs().subscribe((res)=>{
      this.cabs = res;
    },(error)=>{
      console.log(error);
    })
   }

   addCabForm(){
    this.dialog.open(AddCabComponent).afterClosed().subscribe((res)=>{
      if(res)
      this.getAllCabs()
    })
   }
   updateCabForm(data:any){
    this.dialog.open(AddCabComponent,{ data}).afterClosed().subscribe((res)=>{
      if(res)
      this.getAllCabs()
    })
   }
   removeCab(cabId:number){
    if(confirm("are you sure want to remove cab"))
    this.cabService.deleteCab(cabId).subscribe((res)=>{
      this.getAllCabs();
      //console.log(res)
    },(err)=>{
      console.log(err);
    })
   }
   removeCabDriver(id:number){
    if(confirm("are you sure want to remove driver"))
        this.cabService.deleteCabDriver(id).subscribe((res)=>{
          this.getAllCabs();
          //console.log(res)
        },(err)=>{
          console.log(err);
        })
   }

   assignDriver(data:any){
    this.dialog.open(AssignDriverComponent,{ data }).afterClosed().subscribe((res)=>{
      if(res){
        this.getAllCabs();
      }
    })
   }
}

import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DriverService } from 'src/app/services/driver/driver.service';
import { AddDriverComponent } from '../add-driver/add-driver.component';
import { Driver } from 'src/app/models/driver';
import { AssignCabComponent } from '../assign-cab/assign-cab.component';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.css']
})
export class ViewDriverComponent {

  displayedColumns: string[] = ['Id', 'name', 'email', 'idNumber', 'phoneNumber', 'cab', 'action'];
  dataSource: MatTableDataSource<any>;
  drivers: Driver[];
  constructor(private service: DriverService, private dialoge: MatDialog) {
  }

  pageIndex: number = 0;
  pageSize: number = 100;
  length: number;

  ngOnInit() {
    this.getDriverList();
  };
  getDriverList() {
    this.service.getDrivers()
      .subscribe(response => {
        console.warn(response);
        this.drivers = response;
        this.dataSource = new MatTableDataSource(this.drivers);
        this.length = response.length
      })
  }

  addDriverForm() {
    this.dialoge.open(AddDriverComponent).afterClosed().subscribe((val) => {
      this.getDriverList();
    });
  }
  updateDriverForm(data: any) {
    this.dialoge.open(AddDriverComponent, { data }).afterClosed().subscribe((val) => {
      this.getDriverList();
    });
  }

  removeDriver(id: number) {
    if (confirm("Are you sure you want to delete this driver?"))
      this.service.deleteDriver(id).subscribe((res) => {
        this.getDriverList();

      })
  }

  unassignedCab(driverId: number) {
    if(confirm("are you sure want to remove cab"))
        this.service.unassignedCab(driverId).subscribe((res)=>{
          this.getDriverList();
          //console.log(res)
        },(err)=>{
          console.log(err);
        })
  }
  assignCab(data:any) {
      this.dialoge.open(AssignCabComponent,{data}).afterClosed().subscribe((val)=>{
        this.getDriverList();
      });
  }
}

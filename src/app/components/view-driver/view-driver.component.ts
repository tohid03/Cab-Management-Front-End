import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DiverService } from 'src/app/services/driver/diver.service';
import { AddDriverComponent } from '../add-driver/add-driver.component';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.css']
})
export class ViewDriverComponent {
  displayedColumns: string[] = ['Id', 'name', 'email', 'idNumber', 'phoneNumber', 'cab', 'action'];
  dataSource: MatTableDataSource<any>;
  dataArray: any;
  constructor(private service: DiverService, private dialoge: MatDialog) {
  }

  pageIndex: number = 0;
  pageSize: number = 100;
  length: number;

  ngOnInit() {
    this.getDriverList();
  };
  getDriverList() {
    this.service.getDrivers(this.pageIndex, this.pageSize)
      .subscribe(response => {
        console.warn(response);
        this.dataArray = response;
        this.dataSource = new MatTableDataSource(response);
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

  onDelete(id: number) {
    if (confirm("Are you sure you want to delete this driver?"))
      this.service.deleteDriver(id).subscribe((res) => {
        this.getDriverList();

      })

  }

}

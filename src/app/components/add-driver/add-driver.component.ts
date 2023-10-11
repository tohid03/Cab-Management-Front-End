import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { DriverService } from 'src/app/services/driver/driver.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent {

  constructor(public driver: DriverService,
    public dialogBox: MatDialogRef<AddDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    id:number;

  ngOnInit() {
    this.resetDataForm();
    if (this.data != null)
    {
      this.driver.formData = this.data;
      this.id = this.driver.formData.id;
    }
  }


  resetDataForm(form?: NgForm) {
    if (form == null) {
      this.driver.formData = {
        id: 0,
        name: '',
        email: '',
        phoneNumber: null,
        idNumber: null,
        cab: null
      }
    } else { form.resetForm(); }


  }

  onSubmit(form: NgForm) {
    //console.warn(form.value);
    if (form.valid) {
      if (this.data) {
        console.log(this.data)
        this.driver.updateDriver(this.id,form.value).subscribe(res => {
          this.resetDataForm(form);
          this.onClose();
        },error=>{
          console.error(error)
        })
      } else {
        this.driver.addDriver(form.value).subscribe(res => {
          this.resetDataForm(form);
          this.onClose();
          alert("Add data Sucessfully");
        }, error => {
          console.log(error);
        }
        )
      }


    }
  }
  onClose() {
    this.dialogBox.close(true);
  }


}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CabService } from 'src/app/services/cab/cab.service';
import { Inject } from '@angular/core'

@Component({
  selector: 'app-add-cab',
  templateUrl: './add-cab.component.html',
  styleUrls: ['./add-cab.component.css']
})

export class AddCabComponent {
  constructor(public cabService: CabService, private dialogRef: MatDialogRef<AddCabComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  cabId: number;

  ngOnInit() {
    this.resetForm();
    if (this.data != null) {
      this.cabService.formData = this.data;
      this.cabId = this.data.id;
    }
  }

  resetForm(form?: NgForm) {
    if (form == null) {
      this.cabService.formData = {
        id: 0,
        cabModel: '',
        cabColour: '',
        cabRegistrationNumber: '',
        driver: null
      }
    } else {
      form.resetForm();
    }
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.data) {
        this.cabService.updateCab(this.cabId, form.value).subscribe((res) => {
          this.onClose();
        }, (err) => {

        });
      } else {
        this.cabService.addCab(form.value).subscribe((res) => {
          this.onClose();
        }, (err) => {
          console.error(err);
        });
      }
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}

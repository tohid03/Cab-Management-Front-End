import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import { ViewDriverComponent } from './components/view-driver/view-driver.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AddDriverComponent } from './components/add-driver/add-driver.component'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DiverService } from './services/driver/diver.service';
import { CabService } from './services/cab/cab.service';
import { ViewCabComponent } from './components/view-cab/view-cab.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ViewDriverComponent,
    AddDriverComponent,
    ViewCabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    NgbModule
    
  ],
  providers: [DiverService,CabService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {BikesComponent} from './bikes.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }         from './app.component';
import {  BikeService }   from './bike.service';


@NgModule ({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
   BikesComponent,
  ],
  providers: [ BikeService ],
  bootstrap: [ AppComponent ],
 
})
export class AppModule { }

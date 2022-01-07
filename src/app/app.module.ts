import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { LocationListComponent } from './home/location-list/location-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './home/map/map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LocationListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: process.env.GOOGLE_MAP_API_KEY,
      libraries: ['places', 'drawing', 'geometry']
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

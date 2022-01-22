import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC-_aQOQs-X0NC_Fij0vi_wsiK1EKOxarU",
      authDomain: "headache-dev.firebaseapp.com",
      projectId: "headache-dev",
      storageBucket: "headache-dev.appspot.com",
      messagingSenderId: "497689270438",
      appId: "1:497689270438:web:3f3c937669ee68ec5cbc67",
      measurementId: "G-5WW65WEFS3"
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

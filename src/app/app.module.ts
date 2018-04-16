import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

// https://coursetro.com/posts/code/94/Use-Angular-with-Google's-Cloud-Firestore---Tutorial
var firebaseConfig = {
  apiKey: "AIzaSyAzG8QoxZ35sLBq-yO-hssz2EX2STnJ0uU",
  authDomain: "employees-4fee4.firebaseapp.com",
  databaseURL: "https://employees-4fee4.firebaseio.com",
  projectId: "employees-4fee4",
  storageBucket: "employees-4fee4.appspot.com",
  messagingSenderId: "558184835678"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

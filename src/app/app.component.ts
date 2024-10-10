import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC3lj2aYJv7HpYc5BFk3CUpVywcQEQ349E',
  databaseURL: "https://opshanchat-default-rtdb.firebaseio.com"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}

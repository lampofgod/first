import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleEC = 'my-dream-app';
  typeEC = "arch";
  valueEC = 500;
  labelEC = "EC";
  minEC = "0";
  maxEC = "2000";
  appendTextEC = "us/cm";

  typePH = "arch";
  valuePH = 0.2;
  labelPH = "PH";
  minPH = "0";
  maxPH = "14";


  thresholdConfigEC = {
    '0': {color: 'green'},
    '500': {color: 'yellow'},
    '1000': {color: 'orange'},
    '1500': {color: 'red'}
};

thresholdConfigPH = {
  '0': {color: 'red'},
  '7': {color: 'blue'},
  '8': {color: 'green'},
};
}

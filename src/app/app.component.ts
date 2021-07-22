import { Component, VERSION, ViewChild } from '@angular/core';
import { defaultData } from '../data';
import { anotherData } from '../data2';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public data: object[] = [];

  @ViewChild('spreadSheetInstance') spreadSheetInstance: SpreadsheetComponent;

  ngOnInit(): void {}

  toggledata() {
    this.data = [].concat(defaultData());
  }
  retoggledata() {
    if (this.spreadSheetInstance.filteredRows == '[object Object]') {
      this.spreadSheetInstance.setRowHeight(200, 0);
    }
    this.data = [].concat(anotherData());
  }
}

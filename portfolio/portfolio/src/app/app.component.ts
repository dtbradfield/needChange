import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  private apiUrl = "https://api.github.com/users/dtbradfield/starred";
  
  constructor() {
  }

  ngOnInit() {
    
  }

}

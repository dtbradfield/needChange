import { Component, OnInit } from '@angular/core';
import { StarredConfigService } from './starred-config.service'

@Component({
  selector: 'app-starred-config',
  templateUrl: './starred-config.component.html',
  styleUrls: ['./starred-config.component.css']
})
export class StarredConfigComponent implements OnInit {
  configService: StarredConfigService;
  

  constructor() { }

  ngOnInit() {
  }


}

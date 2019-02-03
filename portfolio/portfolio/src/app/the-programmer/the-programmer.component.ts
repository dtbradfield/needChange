import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-the-programmer',
  templateUrl: './the-programmer.component.html',
  styleUrls: ['./the-programmer.component.css']
})
export class TheProgrammerComponent implements OnInit {
  projects: [];
  revealProjects: boolean = false;
  clickMessage: string = 'reveal';

  constructor() { }

  ngOnInit() {
  }

  onRevealCodeProjects() {
    this.revealProjects = !this.revealProjects;
    if ( this.revealProjects ) {
      this.clickMessage = 'hide'
    } else { this.clickMessage = 'reveal' }
  }

}

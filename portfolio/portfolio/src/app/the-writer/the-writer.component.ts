import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-writer',
  templateUrl: './the-writer.component.html',
  styleUrls: ['./the-writer.component.css']
})
export class TheWriterComponent implements OnInit {
  revealWriting: boolean = false;
  clickMessage: string = 'reveal'

  constructor() { }

  ngOnInit() {
  }

  onRevealWriting() {
    this.revealWriting = !this.revealWriting;
    if ( this.revealWriting ) {
      this.clickMessage = 'hide'
    } else { this.clickMessage = 'reveal' }
  }

}

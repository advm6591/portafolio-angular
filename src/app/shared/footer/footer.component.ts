import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anno: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}

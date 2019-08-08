import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anno: number = new Date().getFullYear();

  // tslint:disable-next-line: variable-name
  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit() {
  }

}

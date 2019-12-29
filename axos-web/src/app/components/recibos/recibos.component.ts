import { RecibosService } from './../../services/recibos.service';
import { Component, OnInit } from '@angular/core';
import { Recibo } from 'src/models/Recibo';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrls: ['./recibos.component.scss']
})
export class RecibosComponent implements OnInit {
  recibosList: Recibo[] = [];

  constructor(private recibosService: RecibosService) {
    this.recibosList = recibosService.getRecibos();
  }

  ngOnInit() {
  }

}

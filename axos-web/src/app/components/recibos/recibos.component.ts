import { AccountService } from './../../services/cuenta.service';
import { User } from 'src/models/User';
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
  usuario: User;

  constructor(private recibosService: RecibosService, private cuenta: AccountService) {
    this.recibosList = recibosService.getRecibos();

  }

  ngOnInit() {
  }

}

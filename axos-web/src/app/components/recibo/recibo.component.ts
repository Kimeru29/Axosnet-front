import { Recibo } from 'src/models/Recibo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.scss']
})
export class ReciboComponent implements OnInit {
  @Input() recibo: Recibo;
  constructor() { }

  ngOnInit() {
  }

}

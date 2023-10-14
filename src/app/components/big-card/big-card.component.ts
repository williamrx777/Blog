import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = "NOVO HOMEM DE FERRO ANUNCIADO"
  @Input()
  cardDescription:string = "Marvel studio anuncia novo filme do homem de ferro."
}

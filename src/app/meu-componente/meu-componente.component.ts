import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit, OnDestroy {

  nome = 'Treina Web';

  @Input('nomeExterno') atributoExterno;

  @Output() myClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log('Abc');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  callClick() {
    this.myClick.emit(123)
  }
}

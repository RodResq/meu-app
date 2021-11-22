import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit, AfterViewInit {

  nome = 'Treinaweb';
  @ViewChild('minhaClasse') minhaClasse: ElementRef;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  recuperarClasseEstilo(element) {
    if (element == (null || undefined)) {
      return;
    }
    return {
      classe1: (element.value == 1),
      classe2: (element.value == 2),
      classe3: (element.value == 3),
      classeMaior1: (element.value > 1)
    };
  }
}

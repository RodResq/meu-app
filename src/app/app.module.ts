import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import {FormsModule} from '@angular/forms';
import { AlteraCorDirective } from './altera-cor.directive';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    AlteraCorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

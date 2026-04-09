import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Secao } from './secao/secao';
import { Locais } from './locais/locais';
import { CardTourz } from './cardtourz/cardtourz';
import { Final } from './final/final';

@Component({
  selector: 'app-root',
  standalone: true, // ⚠️ importante!
  imports: [RouterOutlet, Menu, Secao, Locais, CardTourz, Final], // ← vírgula aqui
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ⚠️ também corrigi isso aqui
})
export class App {
  protected readonly title = signal('aula.03');
}
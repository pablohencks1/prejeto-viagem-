import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Menu} from './menu/menu';
import {Secao} from './secao/secao';
import {Locais} from './locais/locais';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Secao, Locais],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula.03');
}

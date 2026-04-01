import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Menu} from './menu/menu'
import {Secao} from './secao/secao'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Secao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula.03');
}

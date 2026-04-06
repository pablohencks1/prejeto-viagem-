import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  imports: [],
  templateUrl: './icons.html',
  styleUrl: './icons.css',
})
export class Icons {
whytamanho = 'why choose Tourz';

diferencias = [
  {
    icone: 'public/icons/ticket.svg fill.png',
    titulo: 'Ultimate flexbility',
    descrição: "you're in control, with free cancellation..."
  },
  {
    
    icone: 'public/icons/hot-air-balloon.svg.png',
    titulo: 'Memorable experiences',
    descrição: 'browse and book tours and actividades...'
  },
  {
    icone: "public/icons/diamond.svg.png",
    titulo: 'quality at our core',
    descricao: 'high-quality...'
  },
 {
    icone: "public/icons/medal.svg.png",
    titulo: 'Award-winning support',
    descricao: 'new prince? new plano? no problem...'
  }

];

}


import { Component } from '@angular/core';
import { ICard } from './card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
    cards: ICard[];
  
    constructor() {
      this.cards = [
        {
          src: "/card-placeholder.avif",
          alt: "Portfolio card",
          path: "card"
        },
        {
          src: "/card-placeholder.avif",
          alt: "Portfolio card",
          path: "card"
        },
        {
          src: "/card-placeholder.avif",
          alt: "Portfolio card",
          path: "card"
        },
        {
          src: "/card-placeholder.avif",
          alt: "Portfolio card",
          path: "card"
        },
      ]
    }
}

import { Component, OnInit } from '@angular/core';
import { HomeCard } from './home-card.model';

const homeCards: HomeCard[] = [
  { title: 'Pictures', path: 'pictures', className: 'pictures' },
  { title: 'Galleries', path: 'galleries', className: 'galleries' },
  { title: 'Author', path: 'author', className: 'author' },
  { title: 'Other', path: 'other', className: 'other' },
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeCards: HomeCard[] = homeCards;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import Season from './season.interface';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  @Input() season : Season = {
    date: '',
    imageUrl: '',
    number: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}

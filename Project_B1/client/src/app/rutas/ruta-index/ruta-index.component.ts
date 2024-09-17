import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ruta-index',
  templateUrl: './ruta-index.component.html',
  styleUrls: ['./ruta-index.component.scss']
})
export class RutaIndexComponent implements OnInit {

  imagenes:any[]=[
    'assets/slides/img1.jpg',
    'assets/slides/img2.jpg',
    'assets/slides/img3.jpg',
    'assets/slides/img4.jpg',
    'assets/slides/img5.jpg'
  ]
  constructor(private _config:NgbCarouselConfig) {
    _config.interval = 4000;
    _config.showNavigationArrows = true;
    _config.showNavigationIndicators = true;
    _config.pauseOnHover = false;
    _config.pauseOnFocus = false;
  }

  ngOnInit() {
  }

}

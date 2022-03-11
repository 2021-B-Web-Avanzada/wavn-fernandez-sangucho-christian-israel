import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto';

  constructor(private modalService: NgbModal) { }

  openVerticallyCentered(content: any){
    this.modalService.open(content, { centered: true });
  }

}

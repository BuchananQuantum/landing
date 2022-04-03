import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-uberbooty-messenger',
  templateUrl: './uberbooty-messenger.component.html',
  styleUrls: ['./uberbooty-messenger.component.css']
})

/**
 * Social Marketing Component
 */
export class UberBootyMessengerComponent implements OnInit {

  constructor(private modalService: NgbModal) { }


  ngOnInit(): void {
  }

  /**
    * Open modal for show the video
    * @param content content of modal
    */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}

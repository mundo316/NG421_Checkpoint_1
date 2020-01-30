import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  modalInstance;
  newDescription;

  constructor() {}

  ngOnInit() {
  }

  yes() {
    this.modalInstance.close("yes");
  }

  //insert method to save when getitdone is clicked

}

import { Component, Input, Output, input, output, computed, EventEmitter } from '@angular/core';

import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";   // type definition

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  // standalone: true,   // we don't need this if we want to use ngmodule instead of standalone components
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  // imports: [CardComponent]   // we don't need this if we want to use ngmodule instead of standalone components; we need to add this to app.module.ts -> declarations
})

export class UserComponent {
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex])
  // }

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  // select = output<string>();

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // @Input() and @Output() give a child component a way to communicate with its parent component.
  // @Input() lets a parent component update data in the child component. Conversely, @Output() lets the child send data to a parent component.
  @Input({required: true}) user!: User;
  @Input({required: true})  selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

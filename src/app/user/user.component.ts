import { Component, computed, Input, input, Output, EventEmitter, output} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // With signals
  // avatar = input.required<string>();
  // name = input.required<string>();
  // Using decorators
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!: string;

  @Input({required: true}) user!:User;
  @Input({required: true}) selected = false;
  @Output() select = new EventEmitter<string>();  // With output decoretor
  // select = output<string>()  // with output function, this output function work in the same way as the Output decorator but without declaring a new EventEmitter, because it is already declared in the output function body. 

  // With signals
  // imagePath = computed(() => 'assets/users/' + this.avatar());
  // Without signals
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

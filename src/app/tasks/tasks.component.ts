import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name?: string; 
  //a alternative way to use question mark(?) is to use union type like this: @Input() name: string | undefined;
}

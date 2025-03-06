import { Component, Output, EventEmitter, signal, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
	selector: 'app-new-task',
	imports: [FormsModule],
	templateUrl: './new-task.component.html',
	styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
	@Input({ required: true }) userId!: string;
	@Output() close = new EventEmitter<void>();
	// @Output () add = new EventEmitter<NewTaskData>();

	// two-way binding without signals
	enteredTitle = '';
	enteredSummary = '';
	enteredDate = '';
	// two-way binding with signals
	// enteredTitle = signal('');
	// enteredSummary = signal('');
	// enteredDate = signal('');

	private tasksService: TasksService = inject(TasksService);

	onCancel() {
		this.close.emit();
	}

	onSubmit() {
		this.tasksService.addtasks(
			{
				title: this.enteredTitle,
				summary: this.enteredSummary,
				date: this.enteredDate
			},
			this.userId
		);
		this.close.emit();
	}
}

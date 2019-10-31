import { Component, OnInit } from '@angular/core';

import {TaskService} from '../task.service';
import {Numbers} from '../numbers';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  tasks: Numbers[];

  constructor( private taskService: TaskService) { }

  ngOnInit() {
   this.getTask();
  }

  getTask() {
    this.taskService.getTask()
      .subscribe(task => this.tasks = task);
  }

}

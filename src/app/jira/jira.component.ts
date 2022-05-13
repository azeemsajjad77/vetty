import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { addToDoDialogComponent } from './addToDo.component';

@Component({
  templateUrl: 'jira.component.html',
  styleUrls: ['jira.component.scss'],
})
export class JiraComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  todo = ['First Task'];
  done = ['Final Task'];

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addToDO() {
    const dialogRef = this.dialog.open(addToDoDialogComponent);
    dialogRef.afterClosed().subscribe((res) => {
      this.todo.push(res.data);
    });
  }
}

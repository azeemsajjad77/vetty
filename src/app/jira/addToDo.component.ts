import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: 'addToDo.component.html',
})
export class addToDoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<addToDoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  task: any;

  ngOnInit() {}

  addTask() {
    this.dialogRef.close({ data: this.task });
  }

  close() {
    this.dialogRef.close();
  }
}

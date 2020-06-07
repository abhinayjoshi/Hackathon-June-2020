import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TodoHttpService } from '../todo-httpService';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animal: string;
  name: string;
  tomorrow: Date = new Date();

  constructor(public dialog: MatDialog, private todoService: TodoHttpService) {}

  ngOnInit() {
    this.todoService.getAllTasks().subscribe(
      data => {
        console.log(data);
        return;
      },
      error => {
        console.log('Some error occured');
        console.log(error.errorMessage);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddTask, {
      width: '500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-add-task',
  templateUrl: 'dialog-add-task.html',
  styleUrls: ['./dialog-add-task.css']
})
export class DialogAddTask {

  constructor(
    public dialogRef: MatDialogRef<DialogAddTask>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/task.service';
import { UserService } from '../user/user.service';
import { Log } from './log';
import { LogService } from './log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  logs = [];
  tasks = [];
  model = new Log();
  deleteid = 0;
  loginUser = 'Gowtham';
  constructor(
    private logService: LogService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.model.empname = localStorage.getItem('wsuser');
    this.model.status = 'Inprogress';
    this.getAllTasks();
    this.getAllLogs();
  }

  getAllTasks() {
    let currentUser = localStorage.getItem('wsuser');
    console.log(currentUser);
    this.taskService.getAllTasksService().subscribe((data: any[]) => {
      console.log(data);
      this.tasks = data.filter((x) => x.assigneto === currentUser);
    });
  }

  getAllLogs() {
    let currentUserLog = localStorage.getItem('wsuser');
    this.logService.getAllLogsService().subscribe((data: any[]) => {
      console.log(data);
      this.logs = data.filter((x) => x.empname === currentUserLog);
    });
  }

  addLog() {
    if (!this.model.id) {
      alert(this.model);
      console.log(this.model);
      this.logService.createLogService(this.model).subscribe((data) => {
        this.getAllLogs();
        this.model = new Log();
        document.getElementById('addLogModal').click();
      });
    } else {
      console.log(this.model);
      this.logService
        .updateLogService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllLogs();
          this.model = new Log();
          document.getElementById('editLogModal').click();
        });
    }
  }
  editLog(id) {
    // alert(id);
    this.logService.getLogService(id).subscribe((data: any) => {
      this.model = data;
    });
  }

  // a(id1)
  deleteLog(id) {
    // alert(id);
    this.deleteid = id;
  }
  remove() {
    this.logService.deleteLogService(this.deleteid).subscribe((data) => {
      this.getAllLogs();
      this.deleteid = 0;
      document.getElementById('deleteLogModal').click();
    });
  }
}

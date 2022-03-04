import { Component, OnInit, ViewChild } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';
import { FormBuilder, Validators } from '@angular/forms';
// import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  passwordsMatching: boolean = false;
  isConfirmPasswordDirty: boolean = false;
  confirmPasswordClass: string = 'form-control';
  name = 'Angular';
  users = [];
  model = new User();
  editmodel = new User();
  @ViewChild('editTaskModal') editTaskModal;
  deleteid = 0;
loginForm: any;
formBuilder: any;
returnUrl: any;
route: any;
success: string;
  constructor(private userService: UserService) {}
  // ngOnInit() {
  //   this.model.role = 'User';
  //   this.getAllUsers();
  // }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }
  getAllUsers() {
    this.userService.getAllUsersService().subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
    });
  }
  addUser() {
    if (!this.model.id) {
      this.userService.createUserService(this.model).subscribe((data) => {
        this.getAllUsers();
        this.model = new User();
        document.getElementById('addTaskModal').click();
      });
    } else {
      console.log(this.model);
      this.userService
        .updateUserService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllUsers();
          this.model = new User();
          document.getElementById('editTaskModal').click();
        });
    }
  }
  editUser(id) {
    alert(id);
    this.userService.getUserService(id).subscribe((data: any) => {
      this.model = data;
    });
  }
  // a(id1)
  deleteUser(id) {
    alert(id);
    this.deleteid = id;
  }
  remove() {
    this.userService.deleteUserService(this.deleteid).subscribe((data) => {
      this.getAllUsers();
      this.deleteid = 0;
      document.getElementById('deleteTaskModal').click();
    });
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;    
  }
  checkPasswords(f): boolean {
    this.isConfirmPasswordDirty = true;
    if (this.model.password === this.model.confirmpassword) {
      this.passwordsMatching = true;
      this.confirmPasswordClass = 'form-control is-valid';
      return true;
    } else {
      this.passwordsMatching = false;
      this.confirmPasswordClass = 'form-control is-invalid';
      return false;
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  user?: User;
  uploadImage?: File;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private fileUpload: FileUploadService
  ) {
    this.user = userService.user;
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [this.user?.name, Validators.required],
      email: [this.user?.email, [Validators.required, Validators.email]],
    });
  }

  updateProfile() {
    console.log(this.profileForm?.value);
    this.userService.updateProfile(this.profileForm.value).subscribe((resp) => {
      const { name, email } = this.profileForm.value;
      this.user!.name = name;
      this.user!.email = email;
    });
  }

  changeImage(ev: any) {
    this.uploadImage = ev.target.files[0];
  }

  imageUpload() {
    this.fileUpload
      .updatePhoto(this.uploadImage as File, 'users', this.user?.uid as string)
      .then((img) => console.log(img));
  }
}

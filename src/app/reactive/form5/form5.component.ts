import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {
  profileForm;
  constructor(private fb: FormBuilder) {

    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.fb.array([
      this.fb.control('')
    ])
    });
  }
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {

  }
}

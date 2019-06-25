import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator),
    });
  }

  yearValidator (control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let fromYear = 1900;
    let toYear = 2100;
    let year = parseInt(control.value);
    if (year < fromYear || year > toYear ){
      return {
        'error': 'year should be 1900-2100'
      }
    } else {
      return null
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}

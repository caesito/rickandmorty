import { Component, OnInit } from '@angular/core';
import { ContentListComponent } from '../content-list/content-list.component';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent implements OnInit {

  constructor(public single: ContentListComponent) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    this.single.getSingleCharacter(form.value.name);
    console.log(form.value.name);
    
  }

}

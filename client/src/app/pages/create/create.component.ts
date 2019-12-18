import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/article';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
 
  user = new Article();

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
  }
}

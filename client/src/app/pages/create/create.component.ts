import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/article';
import { ArticleService } from 'src/app/shared/article.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Review } from 'src/app/shared/review';
import { Place } from 'src/app/shared/place';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
 
  article = new Article();
  review = new Review();
  places : Place[];

  articleForm  = this.fb.group({
    artName : ['',[Validators.required]],
    artCategory : [''],
    artEnergy : [''],
    artPiece : [''],
    artPackaging: [''],
    artCompo: [''],
    artPlace: [''],
    artAdvice : this.fb.group({
      artReview : [''],
      artNote : [''],
    }),
   })
   


  

  constructor(private fb: FormBuilder,private articleService : ArticleService) { }

  ngOnInit() {
    this.articleService.getPlaces().subscribe((value)=>{this.places=value});

  }

  
  onSubmit() {
    console.log(this.places)
    this.article.name = this.articleForm.value.artName;
    this.article.place_id = this.articleForm.value.artPlace;
    console.log(this.article.place_id)
    //this.article.category_id = this.articleForm.value.artCategory;
    if (this.articleForm.value.artEnergy==='oui'){
      this.article.energy = true;}
    if(this.articleForm.value.artPiece==='oui'){
      this.article.piece = true;}
    if(this.articleForm.value.artPackaging==='oui'){
      this.article.packaging = true;}
    }


   /*  this.user.email= this.userForm.value.credentials.usermail;
    this.user.password= this.userForm.value.credentials.userpass;
    this.user.adress = this.userForm.value.useradress.userroad;
    this.user.cp = this.userForm.value.useradress.usercp;
    this.user.city= this.userForm.value.useradress.usercity; */
  }
  


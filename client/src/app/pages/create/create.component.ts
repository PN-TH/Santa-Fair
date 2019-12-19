import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/article';
import { ArticleService } from 'src/app/shared/article.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Review } from 'src/app/shared/review';
import { Place } from 'src/app/shared/place';
import { Compo } from 'src/app/shared/compo';
import { Category } from 'src/app/shared/category';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
 
  article = new Article();
  review = new Review();
  places : Place[];
  compos : Compo[];
  categories : Category[];
  wantReview : boolean ;

  articleForm  = this.fb.group({
    artName : ['',[Validators.required]],
    artCategory : [''],
    artEnergy : [''],
    artPiece : [''],
    artPackaging: [''],
    artCompo: [''],
    artPlace: [''],
    artWant : [''],
    artAdvice : this.fb.group({
      artReview : [''],
      artNote : [''],
    }),
   })
   


  

  constructor(private fb: FormBuilder,private articleService : ArticleService) { }

  ngOnInit() {
    this.articleService.getPlaces().subscribe((value)=>{this.places=value});
    this.articleService.getCompos().subscribe((value)=>{this.compos=value});
    this.articleService.getCategories().subscribe((value)=>{this.categories=value});

  }

  doYouWantReview(){
    this.wantReview = this.articleForm.value.artWant;
    console.log(this.wantReview)
  }

  onSubmit() {
    this.article.name = this.articleForm.value.artName;
    this.article.category_id = this.articleForm.value.artCategory;
    this.article.place_id = this.articleForm.value.artPlace;
    this.article.composition_id = this.articleForm.value.artCompo;
    this.article.energy = this.articleForm.value.artEnergy;
    this.article.packaging = this.articleForm.value.artPackaging;
    this.article.piece = this.articleForm.value.artPiece;

    if(this.articleForm.value.artAdvice.artReview){
      this.review.commentaire = this.articleForm.value.artAdvice.artReview
    }
    if(this.articleForm.value.artAdvice.artNote){
      this.review.note = this.articleForm.value.artAdvice.artNote
    }

    console.log(this.article)
    console.log(this.review)


    
    
    
    
    }


   /*  this.user.email= this.userForm.value.credentials.usermail;
    this.user.password= this.userForm.value.credentials.userpass;
    this.user.adress = this.userForm.value.useradress.userroad;
    this.user.cp = this.userForm.value.useradress.usercp;
    this.user.city= this.userForm.value.useradress.usercity; */
  }
  


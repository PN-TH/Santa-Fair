import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/article';
import { ArticleService } from 'src/app/shared/article.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Review } from 'src/app/shared/review';
import { Place } from 'src/app/shared/place';
import { Compo } from 'src/app/shared/compo';
import { Category } from 'src/app/shared/category';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  SERVER_URL = "http://localhost:3000/upload";
  uploadForm: FormGroup; 


  articleForm  = this.fb.group({
    artName : [`${this.articleService.keyWord}`,[Validators.required]],
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
   


  

  constructor(private fb: FormBuilder,private articleService : ArticleService,private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.articleService.getPlaces().subscribe((value)=>{this.places=value;
    this.articleService.places=value});
    this.articleService.getCompos().subscribe((value)=>{this.compos=value;
    this.articleService.compositions=value});
    this.articleService.getCategories().subscribe((value)=>{this.categories=value});
    this.uploadForm = this.fb.group({
      photo: ['']
    });
 
    // if (this.articleService.keyWord === undefined) {
    //   this.articleService.keyWord === ''
    // }

    console.log(this.articleService.keyWord)



  }

  doYouWantReview(){
    this.wantReview = this.articleForm.value.artWant;
  }
  onFileSelect(event){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('photo').setValue(file);}

  }




  onSubmit() {
    const formData = new FormData();
    formData.append('photo', this.uploadForm.get('photo').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => {
        console.log(res);
        this.article.image =`http://localhost:3000/uploads/${res.data.name}`;
        this.saveArticle();
        this.router.navigate(['/details']);
      },
      (err) => {console.log(err)}
    );

  }
    saveArticle(){
      this.article.name = this.articleForm.value.artName;
      this.article.category_id = this.articleForm.value.artCategory;
      if(this.articleForm.value.artPlace){
        this.article.place_id = this.articleForm.value.artPlace;}
      if(this.articleForm.value.artCompo){
        this.article.composition_id = this.articleForm.value.artCompo;}
      if(this.articleForm.value.artEnergy){
        this.article.energy = this.articleForm.value.artEnergy;}
      if(this.articleForm.value.artPackaging){
        this.article.packaging = this.articleForm.value.artPackaging;}
      if(this.articleForm.value.artPiece){
        this.article.piece = this.articleForm.value.artPiece;}
      
      this.article.note_SF = this.articleService.getNote(this.article)

      if(this.articleForm.value.artAdvice.artReview){
        this.review.commentaire = this.articleForm.value.artAdvice.artReview
      }
      if(this.articleForm.value.artAdvice.artNote){
        this.review.note = this.articleForm.value.artAdvice.artNote
      }

      this.articleService.addArticle(this.article).subscribe(
        result=>{
          console.log(result)
          this.articleService.selectedArticle = this.article;
        }
      ); 
      
    };
      
      
}
  


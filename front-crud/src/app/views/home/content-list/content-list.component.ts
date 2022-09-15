import { Component, OnInit } from '@angular/core';
import { keyValuesToMap } from '@angular/flex-layout/extended/style/style-transforms';
import { PageEvent } from '@angular/material/paginator';
import { ResponsePageable } from 'src/app/shared/model/responsePageable.model';
import { Serie } from 'src/app/shared/model/serie.model';
import { SerieService } from 'src/app/shared/service/serie.service';
import { ContentFormComponent } from '../content-form/content-form.component';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  characterInfo!: ResponsePageable[];
  characterResults!:Serie[];
  contentPage!: any[];
  npage!: number;
  count!: number;
  urlApiCharacter = "https://rickandmortyapi.com/api/character";
  nextUrl!:string;
  previusUrl!: string;
  urlSingle!: string;
  nextIndex!: number;
  previusIndex!: any;

  constructor(
    public serieService: SerieService,
    
  ) { }

  ngOnInit(): void {
    this.getCharacter(this.urlApiCharacter);
    
  }

  getCharacter(url: string){
    this.serieService.getCharacter(url).subscribe(
      (data: any) => {
        this.characterInfo = data.info;
        this.characterResults = data.results;
        this.nextUrl = data.info.next;
        this.previusUrl = data.info.prev;
        this.npage = data.info.pages;
        this.count = data.info.count;
        console.log(data.results);
      }
    );
  }

  onClickChangePage(event: PageEvent ){
    this.nextIndex = event.pageIndex;
    this.previusIndex =event.previousPageIndex;

    if (this.previusIndex > this.nextIndex) {
      this.getCharacter(this.previusUrl); 
    } else {
      this.getCharacter(this.nextUrl)
    }
  }

  getSingleCharacter( name: string): void {
    this.urlSingle = '';
    this.urlSingle= this.urlApiCharacter + '/?name=' + name;
    this.getCharacter(this.urlSingle)

  }

  onSubmit(form: any): void {
    this.getSingleCharacter(form.value.name);
    
  }

}

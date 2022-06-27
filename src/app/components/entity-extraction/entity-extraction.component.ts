import { Component, OnInit } from '@angular/core';
import {FetchService} from "../../services/fetch.service";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string;
  min_confidence: string;
  include_image: boolean;
  include_abstract: boolean;
  include_categories: boolean;
  sendButtonDisabled: boolean;
  showResults: boolean;
  results: any[];

  constructor(private fetchService: FetchService) {
    this.text = "";
    this.min_confidence = "";
    this.include_abstract = false;
    this.include_image = false;
    this.include_categories = false;
    this.sendButtonDisabled = false;
    this.showResults=false;
    this.results = [];
  }

  checkMinConfidence(e: Event){
    let value = (<HTMLInputElement>e.target).value;
    //console.log(value);
    let test = /(0(\.[0-9]+)?|1)$/.test(value) || value==="";
    if(!test)
      this.sendButtonDisabled=true;
    else
    {
      this.sendButtonDisabled=false;
      this.min_confidence=value;
    }
  }

  queryBuilder(){
    let query : string = "";
    query=`text=${this.text}&`;
    if(this.min_confidence != "")
    {
      console.log("true");
      query = query.concat(`min_confidence=${this.min_confidence}&`);
    }
    if(this.include_abstract || this.include_image || this.include_categories)
    {
      query = query.concat(`include=`);
      if(this.include_abstract)
        query = query.concat(`abstract,`);
      if(this.include_categories)
        query = query.concat(`categories,`);
      if(this.include_image)
        query = query.concat(`image,`);
      query = query.concat(`&`);
    }
    query = query.concat(`token=${localStorage.getItem("token")}`)
    //console.log(query);
    return query;
  }

  sendRequest(){

    this.fetchService.getEntities(this.queryBuilder()).subscribe((result) => {
      console.log(result);
      this.results=result.annotations;
      this.showResults=true;
    })
  }

  ngOnInit(): void {
  }

}

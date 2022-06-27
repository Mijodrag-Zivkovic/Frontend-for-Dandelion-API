import { Component, OnInit } from '@angular/core';
import {FetchService} from "../../services/fetch.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string;
  text2: string;
  result: number;
  showResults: boolean;

  constructor(private fetchService: FetchService) {
    this.text1 = "";
    this.text2 = "";
    this.showResults = false;
    this.result=0;
  }

  ngOnInit(): void {
  }

  queryBuilder(){
    let query : string = "";
    query=`text1=${this.text1}&`;
    query = query.concat(`text2=${this.text2}&`);
    query = query.concat(`token=${localStorage.getItem("token")}`)
    //console.log(query);
    return query;
  }

  sendRequest(){
    if(this.text1!='' && this.text2!='')
    {
      this.fetchService.getTextSimilarity(this.queryBuilder()).subscribe((result) => {
        console.log(result);
        this.result=result.similarity*100;
        this.showResults=true;
        //console.log(this.result);
      })
    }
    else{
      window.alert("All fields must be filled!");
    }
  }

}

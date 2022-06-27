import { Component, OnInit } from '@angular/core';
import {FetchService} from "../../services/fetch.service";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string;
  clean: boolean;
  showResults: boolean;
  results: any[];

  constructor(private fetchService: FetchService) {
    this.text="";
    this.clean=false;
    this.showResults=false;
    this.results = [];
  }

  ngOnInit(): void {
  }

  queryBuilder(){
    let query : string = "";
    query=`text=${this.text}&`;
    if(this.clean)
    {
      query = query.concat(`clean=true&`);
    }
    query = query.concat(`token=${localStorage.getItem("token")}`)
    return query;
  }

  sendRequest(){
    if(this.text!='')
    {
      this.fetchService.getLanguageDetection(this.queryBuilder()).subscribe((result) => {
        console.log(result);
        this.results=result.detectedLangs;
        this.showResults=true;
        //console.log(this.result);
      })
    }
    else{
      window.alert("All fields must be filled!");
    }
  }

}

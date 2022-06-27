import { Component, OnInit } from '@angular/core';
import {FetchService} from "../../services/fetch.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string;
  lang: string;
  showResults: boolean;
  result: any;
  interpolation: string;

  constructor(private fetchService: FetchService) {
    this.text = "";
    this.lang = "auto";
    this.showResults = false;
    this.interpolation="";
  }

  ngOnInit(): void {
  }

  queryBuilder(){
    let query : string = "";
    query=`text=${this.text}&`;
    query = query.concat(`lang=${this.lang}&`);
    query = query.concat(`token=${localStorage.getItem("token")}`)
    return query;
  }

  interpolationCalculator(value: number){
    let interpolation: string = "";
    //console.log(value);
    let r = 255 + (0-255)*value;
    let g = 0 + (255)*value;
    interpolation = `rgb(${r},${g},0)`;
    return interpolation;
  }

  sendRequest(){
    if(this.text!='')
    {
      this.fetchService.getSentimentAnalysis(this.queryBuilder()).subscribe((result) => {
        console.log(result);
        this.result=result.sentiment;
        this.interpolation=this.interpolationCalculator((result.sentiment.score+1)/2);
        this.showResults=true;
        //console.log(this.result);
      })
    }
    else{
      window.alert("All fields must be filled!");
    }
  }

}

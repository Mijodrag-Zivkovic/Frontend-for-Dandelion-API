import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {MyRequest} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  history: MyRequest[];
  constructor(private httpClient: HttpClient) {
    this.history=[];

  }

  generateRequestForHistory(url:string){
    let req:MyRequest=<MyRequest>{};
    let d:Date = new Date();
    req.date=d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()+" "+d.getHours()+"-"+d.getMinutes()+'-'+d.getSeconds();
    req.method="GET";
    req.url=url;
    this.history.push(req);
  }

  getEntities(query:string): Observable<any> {

    this.generateRequestForHistory(`${environment.apiURL}/nex/v1?${query}`);
    return this.httpClient.get<any>(`${environment.apiURL}/nex/v1?${query}`);

  }

  getTextSimilarity(query:string):Observable<any>{
    this.generateRequestForHistory(`${environment.apiURL}/sim/v1?${query}`);
    return this.httpClient.get<any>(`${environment.apiURL}/sim/v1?${query}`);
  }

  getLanguageDetection(query:string):Observable<any>{
    this.generateRequestForHistory(`${environment.apiURL}/li/v1?${query}`);
    return this.httpClient.get<any>(`${environment.apiURL}/li/v1?${query}`);
  }

  getSentimentAnalysis(query:string):Observable<any>{
    this.generateRequestForHistory(`${environment.apiURL}/sent/v1?${query}`);
    return this.httpClient.get<any>(`${environment.apiURL}/sent/v1?${query}`);
  }

}

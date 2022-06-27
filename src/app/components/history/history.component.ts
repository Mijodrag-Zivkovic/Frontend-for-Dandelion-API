import { Component, OnInit } from '@angular/core';
import {FetchService} from "../../services/fetch.service";
import {MyRequest} from "../../models/models";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: MyRequest[];
  //date2: string;

  constructor(private fetchService: FetchService) {
    this.history=[];
  }


  ngOnInit(): void {
    this.history=this.fetchService.history;
  }



}

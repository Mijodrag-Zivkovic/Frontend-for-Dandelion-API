import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  token: string;

  constructor() {
    let t = localStorage.getItem("token");
    if(t==null)
    this.token = '';
    else this.token=t;
  }

  getToken():string{
    return this.token;
  }

  saveToken(){
    localStorage.setItem("token",this.token);
  }



  ngOnInit(): void {
  }

}

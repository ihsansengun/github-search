import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username:string;
  private client_id = '17fad0622dbf1cd43ec3';
  private client_secret = '460b2b155f1336fa0c30d7a1f0a95dfe2de86c1e';

  constructor(private _http:Http) {
    console.log('Github service ready!');
    this.username = 'ihsansengun';

  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'client_secret'+this.client_secret)
        .map(res => res.json());

  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'client_secret'+this.client_secret)
        .map(res => res.json());

  }

  uptadeUser(username:string) {
    this.username= username;
  }

}

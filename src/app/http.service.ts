import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	headers = new HttpHeaders({'Accept':'application/json',"X-RapidAPI-Key":environment.key});


  	constructor(private http:HttpClient) { }

  	public get(path){
  		return this.http.get(path,{'headers':this.headers});
  	}

  	public post(path,data){
  		return this.http.post(path,data,{'headers':this.headers});
  	}
}

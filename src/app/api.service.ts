import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	url=environment.url;

  	constructor(private http:HttpService) { }

  	getAlbum(albumId){
  		return this.http.get(this.url+"album.get?album_id="+albumId);
  	}

  	getAlbumTracks(albumId,pageSize=50){
  		return this.http.get(this.url+"album.tracks.get?album_id="+albumId+"&page_size="+pageSize);
  	}

  	getLyrics(trackId:number){
  		return this.http.get(this.url+"track.lyrics.get?track_id="+trackId);
  	}

  	getSnippet(trackId:number){
  		return this.http.get(this.url+"track.snippet.get?track_id="+trackId);
  	}

	getTrack(trackId){
		return this.http.get(this.url+"track.get?trackId="+trackId);
	}

  	searchTrack(track:string,pageSize=20){
  		return this.http.get(this.url+"track.search?q="+track+"&page_size="+pageSize);
  	}

  	searchArtist(artist:string,pageSize=20){
  		return this.http.get(this.url+"artist.search?q_artist="+artist+"&page_size="+pageSize);
  	}

  	searchSong(song:string,artist='',pageSize=20){

  		if(artist == ''){
  			return this.searchTrack(song,pageSize);
  		}

  		return this.http.get(this.url+"matcher.track.get?q_track="+song+"&q_artist="+artist+"&page_size="+pageSize);
  	}


}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { NotifyService } from '../services/notify.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
	
	search='';
	result=null;
	lyrics =null;
	track=null;
	album=null;
	albumTracks = null;
	@ViewChild('alertSwal') private swal: SwalComponent;

  	constructor(private route:ActivatedRoute, private router:Router, private api:ApiService,
  		private notify:NotifyService) { }

  	ngOnInit() {
  		this.search = this.route.snapshot.paramMap.get('query');
  		this.searchTrack();
  		this.notify.setSwal(this.swal);
  	}

  	formatArg = {search:/\n/g,replace:'<br/>'};

  	formatStr(str:string,args:any){
  		return str.replace(args.search,args.replace);
  	}

  	getAlbum(albumId){
  		this.api.getAlbum(albumId)
  		.subscribe(res=>{
  			//console.log(res);
  			this.album = res;
  			this.getAlbumTracks(this.album.album_id);
  		});
  	}

  	getAlbumTracks(albumId){
  		this.api.getAlbumTracks(albumId)
  		.subscribe(res=>{
  			//console.log(res);
  			this.albumTracks = res;
  		});
  	}

  	getLyrics(trackId:number){
  		this.api.getLyrics(trackId)
  		.subscribe(res=>{
  			//console.log(res);
  			this.lyrics = res;
  		});
  	}

  	getTrack(trackId){
  		this.api.getTrack(trackId)
  		.subscribe(res=>{
  			//console.log(res);
  			this.lyrics = res;
  		});
  	}

  	searchTrack(){
		if(this.search != '' && this.search.split(/\sby\s/).length > 1){
			var parts = this.search.split(/\sby\s/);
			var song = parts[0].trim();
			var artist = parts.length >1 ? parts[1].trim() :'';
			this.api.searchSong(song,artist)
			.subscribe(res =>{
				
				if(!(res instanceof Array)){
					this.result = res;

					if(this.result.has_lyrics){
						this.getLyrics(this.result.track_id);
						this.getAlbum(this.result.album_id);
					}
					//console.log(res);
				}

			},
			error =>{
				//console.log(error);
				this.notify.show({title:'',
          html:'Search for "'+ this.search + '" ' +error.statusText,type:'error'});
			}
			);

		}
	}

	transformResult(ele){
		var obj = {image:''};
		Object.keys(ele).forEach(function(key){

			if(key.match(/^(album_coverart)/) && ele[key] !== ""){
				obj.image = ele[key];
			}

		},ele);

		return {...obj,...ele};
	}

}

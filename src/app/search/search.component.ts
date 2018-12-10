import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import find from 'lodash';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	search='';

  	constructor(private router: Router) { }

	ngOnInit() {

	}

	searchTrack(){
		if(this.search != '' && this.search.split(/by/).length > 1){
			this.router.navigateByUrl("/search/"+this.search);
		}
	}


}

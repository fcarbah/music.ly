import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from '../services/notify.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

import find from 'lodash';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	search='';
	@ViewChild('alertSwal') private swal: SwalComponent;

  	constructor(private router: Router,private notify:NotifyService) { }

	ngOnInit() {
		this.notify.setSwal(this.swal);
	}

	searchTrack(){
		if(this.search != '' && this.search.split(/\sby\s/).length > 1){
			this.router.navigateByUrl("/search/"+this.search);
		}else{
			this.notify.show({type:'info',
				html:'Invalid Search<br/>Search by [Song Title] [by] [Artist Name]'})
		}
	}


}

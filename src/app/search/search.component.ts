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
	valid=false;
	validMessage='';
	validPattern = /\w+(.*)+\s+by\s+\w+(.*)+/i;
	@ViewChild('alertSwal') private swal: SwalComponent;

  	constructor(private router: Router,private notify:NotifyService) { }

	ngOnInit() {
		this.notify.setSwal(this.swal);
	}

	change($event){

		if(this.search ==''){
			this.validMessage='';
		}

		if(this.validPattern.test(this.search)){
			this.validMessage= "<i class='fas fa-check'></i> Valid";
			this.valid=true;
		}else{
			this.validMessage = "<i class='fas fa-times'></i> Invalid Search Query";
			this.valid=false;
		}

		if($event.keyCode==13 && this.valid){
			this.searchTrack();
		}
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

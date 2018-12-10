import { Injectable } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

	private alertSwal:SwalComponent;

  	constructor() { }

  	show(options:any){
  		this.alertSwal.options = Object.assign(this.alertSwal.options,options);
  		this.alertSwal.show();
  	}

  	setSwal(modal:SwalComponent){
  		this.alertSwal = modal;
  	}
}

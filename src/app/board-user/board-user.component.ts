import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

import { DataService } from '../_services/data.service';
import {RoundProgressModule} from 'angular-svg-round-progressbar'; 
import { timer } from 'rxjs';
import * as moment from 'moment';
import { TokenStorageService } from '../_services/token-storage.service';
import { Observable } from "rxjs/internal/Observable";
import { interval } from 'rxjs';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {


  statdi:Observable<any>;
  fincuenta: Observable<any>;
  tiempo: number;

  muerto: any;




  constructor(private dataservice :DataService,private token: TokenStorageService){}

 ngOnInit(){

  this.dataservice.getPublicContent().subscribe(val=>{


    this.statdi=val;
  
    const fechaserver=moment(JSON.parse(val).fincuenta);
    const fechafin=moment(JSON.parse(val).fserver); 


    this.tiempo=fechaserver.diff(fechafin,"seconds")
    
    if(this.tiempo<0)this.muerto=true;
  
  });;



    
  }


 
}
import { ApiService } from './../api.service';
import { Details } from './../details';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  dataId
  details:  Details[];
  
  constructor(public ActivatedRoute:ActivatedRoute, public apiService:ApiService) { }

  ngOnInit() {
  //  let id= this.ActivatedRoute.snapshot.params['id']
  this.apiService.readDetails().subscribe((details: Details[])=>{
    this.details = details;
    console.log(this.details);
    });
  this.ActivatedRoute.paramMap.subscribe((params: ParamMap)=>{
    let id=parseInt(params.get('id'));
    this.dataId=id;
    }
    );

  }
  
   
}

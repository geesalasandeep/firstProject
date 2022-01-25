import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  countrydetails;
  placeName;

  constructor( public dat:DataService ) { }

  ngOnInit(): void {
    this.countrydetails = this.dat.places
  }

  sendToService(){
    this.dat.onRequest(this.placeName)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	searchStr: string = '';
	minLength: number = 3;

  constructor() { }

  handleChange() {
  	console.log(this.searchStr);
  }

  ngOnInit() {
  }

}

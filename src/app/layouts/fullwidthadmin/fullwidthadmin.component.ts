import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-fullwidthadmin',
  templateUrl: './fullwidthadmin.component.html',
  styleUrls: ['./fullwidthadmin.component.css']
})
export class FullwidthadminComponent implements OnInit {

  constructor(private router: Router) { }
  toAdpg() {
    this.router.navigate(['books']);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss']
})
export class AuthComponentComponent implements OnInit {
  isCollapsed : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ontoggle(){
    this.isCollapsed = !this.isCollapsed;
  }
}

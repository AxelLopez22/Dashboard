import { Component, Input, OnInit } from '@angular/core';
import { LinksDashboard } from 'src/app/utils/LinksDashboard';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit{
  @Input() sideNavStatus: boolean = false;

  list = LinksDashboard;

  constructor(){}

  ngOnInit(): void {
    
  }
}

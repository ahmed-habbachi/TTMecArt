import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.scss']
})
export class StuffComponent implements OnInit {
  @Input() title:string='';
  @Input() post:string='';
  @Input() picturePath:string='';
  @Input() github:string='';
  @Input() gmail:string='';
  @Input() LinkedIn:string='';
  constructor() { }
  ngOnInit(): void {
  }
}

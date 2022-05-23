import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent implements OnInit {
  @Input() title:string='';
  @Input() article:string='';
  @Input() picturePath:string='';
  @Input() title2:string='';
  @Input() article2:string='';
  @Input() picturePath2:string='';
  constructor() {}
  ngOnInit(): void {
  }

}

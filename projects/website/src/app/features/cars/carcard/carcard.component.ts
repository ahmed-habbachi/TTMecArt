import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.scss']
})
export class CarcardComponent implements OnInit {
  @Input() picturePath:string='';
  @Input() title:string='';
  @Input() prix:string='';
  @Input() text:string='';
  constructor() { }

  ngOnInit(): void {
  }

}

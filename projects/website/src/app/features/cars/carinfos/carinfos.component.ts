import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Input } from '@angular/core';

@Component({
  selector: 'app-carinfos',
  templateUrl: './carinfos.component.html',
  styleUrls: ['./carinfos.component.scss']
})
export class CarinfosComponent implements OnInit {
  @Input() prixman:string='39.9DT';
  @Input() prixauto:string='42.9DT';
  carId: string|null=''
  constructor( private activatedRoute: ActivatedRoute ) {}

   
  ngOnInit(): void {
    this.carId=this.activatedRoute.snapshot.paramMap.get('id')
  }
}


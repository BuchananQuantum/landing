import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership-benefits',
  templateUrl: './membership-benefits.component.html',
  styleUrls: ['./membership-benefits.component.css']
})

/***
 * BlockChain Component
 */
export class MembershipBenefitsComponent implements OnInit {

  /***
  * nav class set
  */
  navClass = 'nav-light';
  buttonList = true;

  constructor() { }

  ngOnInit(): void {
  }

}

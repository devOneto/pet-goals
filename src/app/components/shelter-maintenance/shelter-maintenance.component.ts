import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelter-maintenance',
  templateUrl: './shelter-maintenance.component.html',
  styleUrls: ['./shelter-maintenance.component.scss'],
})
export class ShelterMaintenanceComponent implements OnInit {

  shelters: any[] = [];

  constructor() { }

  ngOnInit() { }

}

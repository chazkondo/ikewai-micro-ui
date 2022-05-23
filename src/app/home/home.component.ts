import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';

import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
    users: User[] = [];

    constructor() { }

    removeAlert() {
      document.getElementById('alert').className = "d-flex justify-content-between alert alert-warning alert-dismissible fade position-absolute hide";
    }

    ngOnInit() {

    }
}

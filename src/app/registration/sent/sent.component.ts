import { Component, OnInit } from '@angular/core';
import {RegistrateService} from '../registrate.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
})
export class SentComponent implements OnInit {

  constructor(private rs: RegistrateService) { }

  ngOnInit() {
    localStorage.setItem('token', null);
    this.rs.close();
  }

}

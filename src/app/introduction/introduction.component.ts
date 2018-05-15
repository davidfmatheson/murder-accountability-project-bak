import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: [ './introduction.component.css' ]
})
export class IntroductionComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }
}

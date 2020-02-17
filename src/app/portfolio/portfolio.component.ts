import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../Service/portfolio.service';




@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent implements OnInit {
  page:number=0;

  public proyectos = [];

  constructor(private _portfolioService: PortfolioService) { }

  ngOnInit() {
    this._portfolioService.getProjects()
    .subscribe(data => this.proyectos = data);

  }

 

}

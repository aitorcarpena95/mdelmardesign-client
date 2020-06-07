import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../Service/portfolio.service';




@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent implements OnInit {
  p:number= 0;
  rpp:number = 6;
  public proyectos = [];

  constructor(private _portfolioService: PortfolioService) { }

  ngOnInit() {
    this.getPage(0);

  }

  getPage(page){
    this.p = page;
    this._portfolioService.getProjects(page , this.rpp)
    .subscribe(data =>  {
      console.log(page, this.p);
      this.proyectos = data;
    });
  }

}

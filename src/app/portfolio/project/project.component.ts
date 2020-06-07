import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioService } from "../../Service/portfolio.service";
import {Router, ActivatedRoute} from "@angular/router";
import { Slide } from "../../Components/carousel/carousel.interface";
import { AnimationType } from "../../Components/carousel/carousel.animations";
import { CarouselComponent } from "../../Components/carousel/carousel.component";



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectID: any;
  projectData: any;
    dataSource: any;


  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private portfolioService: PortfolioService) { }

  ngOnInit() {
    this. projectID = this._route.snapshot.params['id'];
    this.dataSource = this.loadProjectDetails(this.projectID);

    }

    loadProjectDetails(projectID){
      this.portfolioService.getProjectDetails(projectID).subscribe(project => {
        this.projectData= project;
      });
    }

    goBack() {
      this._router.navigate(['/Portfolio']);
    }

    carousel: CarouselComponent;

    animationType = AnimationType.Scale;

    slides: Slide[] = [
      {
        headline: "For Your Current Mood",
        src:
          "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      },
      {
        headline: "Miouw",
        src:
          "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
      },
      {
        headline: "In The Wilderness",
        src:
          "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80"
      },
      {
        headline: "Focus On The Writing",
        src:
          "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
      }
    ];


  }




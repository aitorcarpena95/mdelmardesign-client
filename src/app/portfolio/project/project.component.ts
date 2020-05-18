import { Component, OnInit } from '@angular/core';
import { PortfolioService } from "../../Service/portfolio.service";
import {Router, ActivatedRoute} from "@angular/router";
import { IProjects } from "../projects";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectID: any;
  projectData: any;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private portfolioService: PortfolioService) { }

  ngOnInit() {
    this. projectID = this._route.snapshot.params['id'];
    this.loadProjectDetails(this.projectID);
    }

    loadProjectDetails(projectID){
      this.portfolioService.getProjectDetails(projectID).subscribe(project => {
        this.projectData = project;
      });
    }


  }




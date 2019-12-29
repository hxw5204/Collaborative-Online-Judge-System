import { Component, OnInit } from '@angular/core';
import { Subscription} from "rxjs";
import {Problem} from "../../models/problem.model";
import {DataService} from "../../services/data.service";
import{OnDestroy} from "@angular/core";

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit,OnDestroy {

  problems:Problem[];
  subscriptionProblems:Subscription;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getProblems();
  }

  ngOnDestroy(): void {
    this.subscriptionProblems.unsubscribe();
  }

  getProblems():void{
    this.subscriptionProblems=this.dataService.getProblems()
      .subscribe((problems=>this.problems=problems));
  }

}

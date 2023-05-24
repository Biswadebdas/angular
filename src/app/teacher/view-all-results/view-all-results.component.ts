// view-all-results.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from './view-all-results.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-results',
  templateUrl: './view-all-results.component.html',
  styleUrls: ['./view-all-results.component.css']
})
export class ViewAllResultsComponent implements OnInit {
 students: any[]=[];

  constructor(private apiService: ApiService, private router: Router ) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.apiService.getStudents().subscribe(
      (data: any[]) => {
        this.students = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addStudent() {
    // Navigate to the "add-record" page
    this.router.navigate(['/add-student']);
  }
  
}

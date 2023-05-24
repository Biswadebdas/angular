import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { ResultService } from '../result.service';

@Component({
  selector: 'app-result-viewer',
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.css']
})
export class ResultViewerComponent implements OnInit {
  rollNumber: any;
  result: any[]=[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rollNumber = params['rollNumber'];
      this.route.data?.subscribe(res=>{console.log(res['result']);});
      
    });
  }
}



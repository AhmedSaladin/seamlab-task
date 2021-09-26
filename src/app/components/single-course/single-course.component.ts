import { Component, Input, OnInit } from '@angular/core';

interface courseT {
  CourseName: string;
  courseColleague: string;
  colleagueLogo: string;
  courseImg: string;
}
@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css'],
})
export class SingleCourseComponent implements OnInit {
  @Input() course!: courseT;
  constructor() {}

  ngOnInit(): void {}
}

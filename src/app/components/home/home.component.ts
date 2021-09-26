import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  courses = [
    {
      courseName: 'User Research for User Experience Design',
      courseColleague: 'The Museum of Modern Art',
      colleagueLogo: '../../../assets/courses/u.png',
      courseImg: '../../../assets/courses/URfUED0.png',
    },
    {
      courseName: 'Buddhism and Modern Psychology',
      courseColleague: 'The Museum of Modern Art',
      colleagueLogo: '../../../assets/courses/w.png',
      courseImg: '../../../assets/courses/BaMP.png',
    },
    {
      courseName: 'Introduction to Philosophy',
      courseColleague: 'Duke University',
      colleagueLogo: '../../../assets/courses/c.png',
      courseImg: '../../../assets/courses/ItP.png',
    },
    {
      courseName: 'Advance on Seeing Through Photographs',
      courseColleague: 'Duke University',
      colleagueLogo: '../../../assets/courses/u.png',
      courseImg: '../../../assets/courses/AoSTP.png',
    },
    {
      courseName: 'Think Again I How to Understand Arguments',
      courseColleague: 'The Museum of Modern Art',
      colleagueLogo: '../../../assets/courses/c.png',
      courseImg: '../../../assets/courses/TAIHtUA.png',
    },
    {
      courseName: 'User Research for User Experience Design',
      courseColleague: 'The Museum of Modern Art',
      colleagueLogo: '../../../assets/courses/w.png',
      courseImg: '../../../assets/courses/URfUED1.png',
    },
    {
      courseName: 'User Research for User Experience Design',
      courseColleague: 'The Museum of Modern Art',
      colleagueLogo: '../../../assets/courses/u.png',
      courseImg: '../../../assets/courses/URfUED2.png',
    },
    {
      courseName: 'Introduction to Logic and Critical Thinking',
      courseColleague: 'Duke University',
      colleagueLogo: '../../../assets/courses/u.png',
      courseImg: '../../../assets/courses/URfUED3.png',
    },
    {
      courseName: 'Modern and Contemporary Art and Design',
      courseColleague: 'The Museum of Modern Art',
      colleagueLogo: '../../../assets/courses/c.png',
      courseImg: '../../../assets/courses/MaCAD.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

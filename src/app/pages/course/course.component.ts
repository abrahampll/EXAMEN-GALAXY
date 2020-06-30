import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseInterface } from '../../components/interfaces/course.interface';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: CourseInterface[] = [];

  constructor(private router: Router,
    private courseService: CourseService) { 
    
    
  }

  ngOnInit(): void {
    this.courseService.getCourses()
      .subscribe(
        courses => this.courses = courses,
        err => console.log(err)
      );
  }

  getDetail(id) {
    this.router.navigate(['/courses',id]);
  }

}

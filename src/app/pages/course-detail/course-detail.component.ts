import { Component, OnInit } from '@angular/core';
import { CourseSectionInterface } from '../../components/interfaces/course-section-interface';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  sections: CourseSectionInterface[] = [];

  constructor(private route: ActivatedRoute,
    private courseService: CourseService) { }

  ngOnInit(): void {
    const idCourse = this.route.snapshot.paramMap.get('id');
    this.courseService.getCourseSections(idCourse)
      .subscribe(
        sections => this.sections = sections,
        err => console.log(err)
      );
  }

}

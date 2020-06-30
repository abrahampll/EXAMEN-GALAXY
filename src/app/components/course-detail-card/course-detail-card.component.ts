import { Component,  Input } from '@angular/core';
import { CourseSectionInterface } from '../interfaces/course-section-interface';

@Component({
  selector: 'app-course-detail-card',
  templateUrl: './course-detail-card.component.html',
  styleUrls: ['./course-detail-card.component.scss']
})
export class CourseDetailCardComponent  {
  @Input() section: CourseSectionInterface;
  constructor() { }

  

}

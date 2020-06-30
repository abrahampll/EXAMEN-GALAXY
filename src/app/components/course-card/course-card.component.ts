import { Component,  Input } from '@angular/core';
import { CourseInterface } from '../interfaces/course.interface';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent  {
  @Input() course: CourseInterface;
  constructor() { }



}

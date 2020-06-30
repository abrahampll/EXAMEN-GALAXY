import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { Observable } from 'rxjs';
import { CourseInterface } from '../components/interfaces/course.interface';
import { CourseSectionInterface } from '../components/interfaces/course-section-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: ServicesModule
})

export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<CourseInterface[]> {
    return this.http.get<CourseInterface[]>('https://ionicapp-7a398.firebaseio.com/galaxydemy/subjects.json');
  }

  getCourseSections(id): Observable<CourseSectionInterface[]> {
    return this.http.get<CourseSectionInterface[]>(`https://ionicapp-7a398.firebaseio.com/galaxydemy/subject/${id}.json`);
  }
}

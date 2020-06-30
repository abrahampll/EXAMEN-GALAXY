import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseDetailCardComponent } from './course-detail-card/course-detail-card.component';



@NgModule({
  declarations: [
    CourseCardComponent,
    CourseDetailCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CourseCardComponent,
    CourseDetailCardComponent
  ]
})
export class ComponentsModule { }

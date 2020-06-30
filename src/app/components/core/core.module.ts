import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../../pages/course/course.component';
import { CourseDetailComponent } from '../../pages/course-detail/course-detail.component';
import { ServicesModule } from '../../services/services.module';
import { ComponentsModule } from '../components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CourseComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    CourseComponent,
    CourseDetailComponent
  ]
})
export class CoreModule { }


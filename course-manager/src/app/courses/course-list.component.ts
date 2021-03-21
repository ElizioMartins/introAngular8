import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: '/src/app/courses/course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
      this.courses = [
        {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 5.4,
        releaseDate: 'December, 2, 2019'
        },
        {
            id: 2,
        name: 'Angular: Http',
        imageUrl: '',
        price: 94.89,
        code: 'LPO-8796',
        duration: 80,
        rating: 5.4,
        releaseDate: 'December, 4, 2020'
        }
        
      ]  
    }


}
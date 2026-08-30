import { Injectable } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class AuthService {
  constructor(private readonly courseService: CourseService) {}
  registerUser() {
    // return this.courseService.findAll();
    return this.courseService.findAll();
  }
}

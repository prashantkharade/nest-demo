import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { TeacherController } from './teacher/teacher.controller';

@Module({
  imports: [CourseModule],
  controllers: [AppController, TeacherController],
  providers: [AppService],
})
export class AppModule {}

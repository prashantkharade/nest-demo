import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { TeacherController } from './teacher/teacher.controller';
import { AuthModule } from './auth/auth.module';
import { TeacherService } from './teacher/teacher.service';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [CourseModule, AuthModule, TeacherModule],
  controllers: [AppController, TeacherController],
  providers: [AppService, TeacherService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CourseModule } from 'src/course/course.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [CourseModule],
})
export class AuthModule {
  constructor(private readonly authService: AuthService) {}

  create() {
    return this.authService.registerUser();
  }

  // return this.authService.registerUser();
}

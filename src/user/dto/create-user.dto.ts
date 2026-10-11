export class CreateUserDto {
  name?: string;
  age?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

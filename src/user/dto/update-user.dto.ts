import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    id: number;
    Name: string;
    Age: number;
    Email: string;
    Password: string;
    ConfirmPassword: string;
    Role: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: Date;
}

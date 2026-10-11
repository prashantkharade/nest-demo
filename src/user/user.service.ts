import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { InjectModel } from '@nestjs/mongoose';
// import { User } from '../schemas/user.schema';
// import { Model } from 'mongoose';

@Injectable()
export class UserService {
  // constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  create(createUserDto: CreateUserDto) {
    console.log('This is user create dto:', createUserDto);
    const user = {
      name: createUserDto.name,
      age: createUserDto.age,
      email: createUserDto.email,
      password: createUserDto.password,
      confirmPassword: createUserDto.password,
      role: createUserDto.role,
      createdAt: new Date().toLocaleString(),
      updatedAt: Date.now(),
      deletedAt: Date.now(),
    };
    console.log('This is user:', user);
    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log('This is user update dto:', updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

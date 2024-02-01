import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
 
  @Post('create-user')
  createUsers(@Body() dto: CreateUserDTO) {
    console.log(dto);
    return this.userService.createUser(dto);
  }
}

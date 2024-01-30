import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get_all_users')
  getUsers(): {
    id: string;
    email: string;
    roles: string[];
    apiKey: string;
    profile: {
      dob: string;
      name: string;
      about: string;
      address: string;
      company: string;
      location: { lat: number; long: number };
    };
    username: string;
    createdAt: string;
    updatedAt: string;
  }[] {
    return this.userService.getUsers();
  }
}

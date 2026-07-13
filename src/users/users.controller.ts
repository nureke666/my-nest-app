import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllNumbers() {
    return [1, 2, 3];
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return `ID: ${id}`;
  }
}

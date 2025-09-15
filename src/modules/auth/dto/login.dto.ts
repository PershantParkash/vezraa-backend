import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'test@example.com',
    description: 'Registered email of the user',
  })
  email: string;

  @ApiProperty({
    example: '12345678',
    description: 'Password of the user',
  })
  password: string;
}
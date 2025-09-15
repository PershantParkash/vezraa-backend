import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'test@example.com',
    description: 'The email address of the user',
  })
  email: string;

  @ApiProperty({
    example: '12345678',
    description: 'The password of the user',
  })
  password: string;
}
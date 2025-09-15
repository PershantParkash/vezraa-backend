import { Controller, Body, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    @ApiOperation({ summary: 'Register a new user' })
    @ApiResponse({ status: 201, description: 'User registered successfully' })
    register(@Body() dto: RegisterDto) {
        return this.authService.register(dto.email, dto.password)
    }

    @Post('login')
    @ApiOperation({ summary: 'Login a user' })
    @ApiResponse({ status: 200, description: 'Return JWT token' })
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto.email, dto.password);
    }
}
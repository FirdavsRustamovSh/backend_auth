import { Controller, Post, Body, Req, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dtos/user.resgiter.dto';
import { UserLoginDto } from './dtos/user.login.dto';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local.auth.guard';
// import { CsrfGuard } from './guards/csrf.guard';

@Controller('auth')
@ApiTags('Auth API')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerUser(@Body() body: UserRegisterDto, @Req() req) {
    return this.authService.signUp(body);
  }

  @UseGuards(LocalAuthGuard) // Use CsrfGuard for login
  @Post('login')
  async loginUser(@Req() req) {
    const user = req.user;
    const accessToken = await this.authService.tokenGenerator(user.id);
    return accessToken;
  }
}

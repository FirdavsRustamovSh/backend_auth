import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ULogin, URegister, UToken } from './interface/auth.interface';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(user: URegister) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const userData = await this.userService.createUser({
      ...user,
      password: hashedPassword,
    });
    const access_token = await this.tokenGenerator({
      id: userData.id
    });
    return { ...access_token };
  }

  async validateUsers({ email, password }: ULogin) {
    let userData = await this.userService.findUserByEmail(email);
    let isMatch = await bcrypt.compare(password, userData.password);
    if (userData && isMatch) {
      const { password, ...result } = userData;
      return result;
    } 

    return null;
  }

  async signIn(user: UToken) {
    const token = await this.tokenGenerator(user);
    return token;
  }

  async tokenGenerator(user: UToken) {
    const payload = { id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

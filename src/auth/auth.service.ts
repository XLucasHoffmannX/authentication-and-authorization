import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'bcrypt';
import { CaslAbilityService } from 'src/casl/casl-ability/casl-ability.service';
import { packRules } from '@casl/ability/extra';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
    private abilityService: CaslAbilityService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!user) {
      throw new Error('Invalid Credentials');
    }

    const isPasswordIsValid = bcrypt.compareSync(
      loginDto.password,
      user.password as string,
    );

    if (!isPasswordIsValid) {
      throw new Error('Invalid Credentials');
    }

    const ability = this.abilityService.createForUser(user);

    const token = this.jwtService.sign({
      name: user.name,
      email: user.email,
      sub: user.id,
      role: user.role,
      permissions: packRules(ability.rules),
    });

    return {
      access_token: token,
    };
  }
}

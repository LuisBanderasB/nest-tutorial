import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return {
      message: 'Hello, register yourself',
    };
  }

  signin() {
    return {
      message: 'Hello, you can login now',
    };
  }
}

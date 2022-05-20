import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail() //it will be make sure that is on email format
  @IsNotEmpty() //it will make sure that the field on the request is not empty
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  data: any[];
  createdAt?: Date;
  updatedAt?: Date;
}

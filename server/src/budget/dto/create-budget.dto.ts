export class CreateBudgetDto {
  user: string;
  id: string;
  type: string;
  value: number;
  description: string;
  currency: string;
  time: string;
  createdAt?: Date;
  updatedAt?: Date;
}

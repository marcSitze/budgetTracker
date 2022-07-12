import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Budget } from './budget.entity';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UsersService } from 'src/users/users.service';
import { randomUUID } from 'crypto';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private usersService: UsersService,
  ) {}

  async create(createBudgetDto: CreateBudgetDto, user: User): Promise<User> {
    const budget: any = {};
    budget.id = randomUUID();
    budget.user = createBudgetDto.user;
    budget.value = createBudgetDto.value;
    budget.currency = createBudgetDto.currency;
    budget.description = createBudgetDto.description;
    budget.type = createBudgetDto.type;
    budget.time = createBudgetDto.time;
    console.log('userInBud: ', user);
    console.log('budgetInBut: ', budget);
    const budgets = [...user.data, JSON.stringify(budget)];
    return this.usersService.update(budget.user, { data: budgets });
  }
}

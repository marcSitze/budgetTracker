import { Body, Controller, Post, Get, Delete, Put } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { Budget } from './budget.entity';
import { BudgetService } from './budget.service';
import { UsersService } from 'src/users/users.service';
import { CreateBudgetDto } from './dto/create-budget.dto';

@Controller('budget')
export class BudgetController {
  constructor(
    private readonly budgetService: BudgetService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async create(@Body() createBudgetDto: CreateBudgetDto): Promise<User> {
    console.log('body: ', createBudgetDto);
    const user = await this.usersService.findOne(createBudgetDto.user);
    return this.budgetService.create(createBudgetDto, user);
  }
}

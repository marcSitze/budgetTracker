import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Budget } from './budget.entity';
import { BudgetController } from './budget.controller';
import { BudgetService } from './budget.service';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Budget])],
  providers: [BudgetService, UsersService],
  controllers: [BudgetController],
})
export class BudgetModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Entities
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { BudgetModule } from './budget/budget.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'jorelmarc',
      password: 'Barcelone10',
      database: 'budgetTracker',
      // entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    BudgetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

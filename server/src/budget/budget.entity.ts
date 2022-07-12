import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CreateBudgetDto } from './dto/create-budget.dto';

@Entity()
export class Budget implements CreateBudgetDto {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  user: string;

  @Column()
  type: string;

  @Column()
  value: number;

  @Column()
  currency: string;

  @Column()
  description: string;

  @Column()
  time: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}

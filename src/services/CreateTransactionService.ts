// import AppError from '../errors/AppError';

import { getCustomRepository } from 'typeorm';

import TransactionRepository from '../repositories/TransactionsRepository';

import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const TransactionsRepository = getCustomRepository(TransactionRepository);

    const transaction = TransactionsRepository.create({
      title,
      value,
      type,
    });

    await TransactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;

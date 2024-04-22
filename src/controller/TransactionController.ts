import { Request, Response } from "express";
import { TransactionService } from "../service/TransactionService";

class TransactionController {
  async createTransaction(req: Request, res: Response) {
    const { sender, tx, amount, date, raffleId, typeTransaction } = req.body;
    const transactionService = new TransactionService();
    try {
      const transaction = await transactionService.createTransaction(
        sender,
        tx,
        amount,
        date,
        raffleId,
        typeTransaction
      );
      res.status(201).json(transaction);
    } catch (error) {
      res.status(error.statusCode).json(error.message);
    }
  }

  async getTransactionsByRaffleId(req: Request, res: Response) {
    const { raffleId } = req.params;
    const transactionService = new TransactionService();
    try {
      const transactions = await transactionService.getTransactionsByRaffleId(
        Number(raffleId)
      );
      res.status(200).json(transactions);
    } catch (error) {
      res.status(error.statusCode).json(error.message);
    }
  }
}

export { TransactionController };

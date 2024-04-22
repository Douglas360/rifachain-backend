import { Transaction } from "../models/Transaction";
import { CustomError } from "../utils/customError";

class TransactionService {
  async createTransaction(
    sender: string,
    tx: string,
    amount: string,
    date: string,
    raffleId: number,
    typeTransaction: string
  ) {
    try {
      const transaction = new Transaction({
        sender,
        tx,
        amount,
        date,
        raffleId,
        typeTransaction,
      });
      await transaction.save();
      return transaction;
    } catch (error) {
      throw new CustomError(error.message, 400);
    }
  }

  async getTransactionsByRaffleId(raffleId: number) {
    try {
      const transactions = await Transaction.find({ raffleId });
      //order by id desc
      transactions.sort((a, b) => {
        return b._id.getTimestamp() - a._id.getTimestamp();
      });
      return transactions;
    } catch (error) {
      throw new CustomError(error.message, 400);
    }
  }
}

export { TransactionService };

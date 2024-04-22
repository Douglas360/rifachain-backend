import { Raffle } from "../models/Raffle";
import { CustomError } from "../utils/customError";

class RaffleService {
  async createRaffle(
    raffleId: number,
    raffleWinner: string,
    numberSelected: number
  ) {
    try {
      const raffle = new Raffle({
        raffleId,
        raffleWinner,
        numberSelected,
      });
      await raffle.save();
      return raffle;
    } catch (error) {
      throw new CustomError(error.message, 400);
    }
  }
}

export { RaffleService };

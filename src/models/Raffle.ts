import { Schema } from "mongoose";

const mongoose = require("mongoose");

const RaffleSchema = new Schema(
  {
    raffleId: {
      type: Number,
      required: true,
    },
    raffleWinner: {
      type: String,
      required: true,
    },
    numberSelected: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Raffle = mongoose.model("Raffle", RaffleSchema);

export { Raffle };

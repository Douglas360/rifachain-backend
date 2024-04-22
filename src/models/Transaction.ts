import { Schema } from "mongoose";

const mongoose = require("mongoose");

const TransactionSchema = new Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    tx: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    raffleId: {
      type: Number,
      required: true,
    },
    typeTransaction: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export { Transaction };

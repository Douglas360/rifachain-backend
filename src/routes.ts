import { Router } from "express";
import { UserController } from "./controller/UserController";
import { TransactionController } from "./controller/TransactionController";
const router = Router();
const userController = new UserController();
const transactionController = new TransactionController();

router.post("/user", userController.createUser);
router.get("/user/:wallet", userController.getUserByWallet);

router.post("/transaction", transactionController.createTransaction);
router.get(
  "/transaction/:raffleId",
  transactionController.getTransactionsByRaffleId
);

export { router };

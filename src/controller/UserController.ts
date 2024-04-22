import { Request, Response } from "express";
import { UserService } from "../service/UserService";

class UserController {
  async createUser(req: Request, res: Response) {
    const { name, wallet, avatar } = req.body;
    const userService = new UserService();
    try {
      const user = await userService.createUser(name, wallet, avatar);
      res.status(201).json(user);
    } catch (error) {
      res.status(error.statusCode).json(error.message);
    }
  }

  async getUserByWallet(req: Request, res: Response) {
    const { wallet } = req.params;
    const userService = new UserService();
    try {
      const user = await userService.getUserByWallet(wallet);
      res.status(200).json(user);
    } catch (error) {
      res.status(error.statusCode).json(error.message);
    }
  }

  async updateUserByWallet(req: Request, res: Response) {
    const { wallet } = req.params;
    const { name, avatar } = req.body;
    const userService = new UserService();
    try {
      const user = await userService.updateUserByWallet(wallet, name, avatar);
      res.status(200).json(user);
    } catch (error) {
      res.status(error.statusCode).json(error.message);
    }
  }

  async deleteUserByWallet(req: Request, res: Response) {
    const { wallet } = req.params;
    const userService = new UserService();
    try {
      await userService.deleteUserByWallet(wallet);
      res.status(204).send();
    } catch (error) {
      res.status(error.statusCode).json(error.message);
    }
  }
}

export { UserController };

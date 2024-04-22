import { User } from "../models/User";
import { CustomError } from "../utils/customError";

class UserService {
  async createUser(name: string, wallet: string, avatar: string) {
    try {
      //verify if user already exists, if yes, return null
      const userExists = await User.findOne({ wallet }).exec();
      if (userExists) {
        return;
      }

      const user = new User({ name, wallet, avatar });
      await user.save();
      return user;
    } catch (error) {
      throw new CustomError(error.message, 400);
    }
  }

  async getUserByWallet(wallet: string) {
    try {
      const user = await User.findOne({ wallet });
      if (!user) {
        throw new CustomError("User not found", 404);
      }
      return user;
    } catch (error) {
      throw new CustomError(error.message, 400);
    }
  }

  async updateUserByWallet(wallet: string, name: string, avatar: string) {
    try {
      const user = await User.findOne({ wallet });
      if (!user) {
        throw new CustomError("User not found", 404);
      }
      user.name = name;
      user.avatar = avatar;
      await user.save();
      return user;
    } catch (error) {
      throw new CustomError(error.message, 400);
    }
  }

  async deleteUserByWallet(wallet: string) {
    try {
      const user = await User.findOne({ wallet });
      if (!user) {
        throw new CustomError("User not found", 404);
      }
      await user.remove();
    } catch (error) {
      throw new CustomError(error.message, 400);
    }
  }
}

export { UserService };

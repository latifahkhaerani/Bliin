import bcrypt from "bcryptjs";
import { database } from "../config/mongodb";

type bodyRegis = {
  username: string;
  name: string;
  password: string;
  email: string;
};

class UserModel {
  static collection() {
    return database.collection("Users");
  }

  static async register(body: bodyRegis) {
    const user = await this.collection().findOne({
      email: body.email,
    });

    if (user) {
      throw {
        message: "Email already exists",
        status: 400,
      };
    }

    body.password = bcrypt.hashSync(body.password, 10);

    const result = await this.collection().insertOne(body);
    return "User created with Id :" + result.insertedId;
  }
}

export default UserModel;

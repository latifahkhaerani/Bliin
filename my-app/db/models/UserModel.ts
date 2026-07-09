import bcrypt from "bcryptjs";
import { database } from "../config/mongodb";
import * as z from "zod";

const UserSchema = z.object({
  email: z
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  name: z.string({ message: "Name is required" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long" }),
});

class UserModel {
  static collection() {
    return database.collection("Users");
  }

  static async register(body: z.infer<typeof UserSchema>) {
    // console.log(UserSchema.parse(body));
    const validInput = UserSchema.parse(body);

    const findEmail = await this.collection().find({
      email: validInput.email,
    });

    if (findEmail) {
      throw {
        message: "Email already exists",
        status: 400,
      };
    }

    const findUsername = await this.collection().find({
      email: validInput.username,
    });

    if (findUsername) {
      throw {
        message: "Username already exists",
        status: 400,
      };
    }

    validInput.password = bcrypt.hashSync(validInput.password, 10);

    const result = await this.collection().insertOne(validInput);
    return "User created with Id :" + result.insertedId;
  }
}

export default UserModel;

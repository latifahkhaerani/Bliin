import bcrypt from "bcryptjs";
import { database } from "../config/mongodb";
import * as z from "zod";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";

const RegisSchema = z.object({
  email: z
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  name: z.string({ message: "Name is required" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long" }),
});

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),

  password: z.string().min(1, { message: "Password is required" }),
});

class UserModel {
  static collection() {
    return database.collection("Users");
  }

  static async register(body: z.infer<typeof RegisSchema>) {
    // console.log(RegisSchema.parse(body));
    const validInput = RegisSchema.parse(body);

    const findEmail = await this.collection().findOne({
      email: validInput.email,
    });

    if (findEmail) {
      throw {
        message: "Email already exists",
        status: 400,
      };
    }

    const findUsername = await this.collection().findOne({
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

  static async login(body: z.infer<typeof LoginSchema>) {
    /* 
        1. check email dan password dari body
        2. check ke db ada emailnya atau tidak -> jika tidak ada error (invalid email or password)
        3. check password match atau tidak (bcryptjs)
        4. buat token dengan jsonwebtoken
        5.  a. token dikirim via cookies
            b. token direturn
    */
    const validInput = LoginSchema.parse(body);

    const findUser = await this.collection().findOne({
      email: validInput.email,
    });

    // console.log(findUser)

    if (!findUser) {
      throw { message: "Invalid email or password", status: 401 };
    }

    const password = await compareSync(body.password, findUser.password);

    if (!password) {
      throw { message: "Invalid email or password", status: 401 };
    }

    const token = sign(
      {
        id: findUser._id,
        email: findUser.email,
      },
      process.env.JWT_SECRET as string,
    );

    console.log(true);

    return token;
  }
}

export default UserModel;

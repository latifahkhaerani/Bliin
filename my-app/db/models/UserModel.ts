import { database } from "../config/mongodb";

class UserModel {
  static collection() {
    return database.collection("Users");
  }

  static async register(){
    
  }
}

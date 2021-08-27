// @ts-ignore
import { BaseModel, types } from "expo-sqlite-orm";
import { openDatabase } from "./db";

export default class Fish extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => openDatabase();
  }

  static get tableName() {
    return "fish";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      category: { type: types.TEXT },
      size: { type: types.TEXT },
      description: { type: types.TEXT },
      price: { type: types.INTEGER },
    };
  }
}

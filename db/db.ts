import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

export async function openDatabase() {
  const internalDbName = "spiritfarer.db"; // Call whatever you want
  const sqlDir = FileSystem.documentDirectory + "SQLite/";
  if (!(await FileSystem.getInfoAsync(sqlDir + internalDbName)).exists) {
    console.log("[openDatabase], 👋 gonna create db");
    await FileSystem.makeDirectoryAsync(sqlDir, { intermediates: true });
    const asset = Asset.fromModule(require("../assets/db/spiritfarer.db"));
    await FileSystem.downloadAsync(asset.uri, sqlDir + internalDbName);
  }
  return SQLite.openDatabase(internalDbName);
}

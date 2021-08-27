export const getFishImg = (id: string) => {
  switch (id) {
    case "Albacore Tuna":
      return require("../../assets/images/fishes/Albacore_Tuna.webp");
    case "Anchovy":
      return require("../../assets/images/fishes/Anchovy.webp");
    case "Empty Shell":
      return require("../../assets/images/fishes/Empty_Shell.webp");
    case "Bay Shrimp":
      return require("../../assets/images/fishes/Anchovy.webp");
    case "Black Tiger Shrimp":
      return require("../../assets/images/fishes/Black_Tiger_Shrimp.webp");
    case "Blue Salmon":
      return require("../../assets/images/fishes/Blue_Salmon.webp");
    case "Bluefin Tuna":
      return require("../../assets/images/fishes/Bluefin_Tuna.webp");
    case "Char":
      return require("../../assets/images/fishes/Char.webp");
    case "Clam":
      return require("../../assets/images/fishes/Clam.webp");
    case "Giant Scallop":
      return require("../../assets/images/fishes/Giant_Scallop.webp");
    default:
      return require("../../assets/images/fishes/Giant_Scallop.webp");
  }
};

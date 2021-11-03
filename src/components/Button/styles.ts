import { StyleSheet } from "react-native";
import { FONTS } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button__title: {
    fontSize: 14,
    fontFamily: FONTS.BOLD,
  },
  button__icon: {
    marginRight: 12,
  },
});

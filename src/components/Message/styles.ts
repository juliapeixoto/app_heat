import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  message: {
    width: "100%",
    marginBottom: 36,
  },

  message__text: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    lineHeight: 20,
    marginBottom: 12,
  },

  message__user: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  message__user__name: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginLeft: 16,
  },
});

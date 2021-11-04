import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  user__photo: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.PINK,
  },
  user__photo__avatar: {
    borderWidth: 4,
    borderColor: COLORS.BLACK_SECONDARY,
    backgroundColor: COLORS.PINK,
  },
});

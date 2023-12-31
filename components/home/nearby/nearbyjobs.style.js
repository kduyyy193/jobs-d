import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  cardsContainer: {
    gap: SIZES.small,
    marginTop: SIZES.medium,
  },
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.small,
  },
  headerBtn: {
    color: COLORS.gray,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
  },
  headerTitle: {
    color: COLORS.primary,
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
  },
});

export default styles;

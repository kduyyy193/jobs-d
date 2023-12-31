import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    height: 40,
    justifyContent: "center",
    margin: 16,
    width: 40
  },
  btnImg: () => ({
    width: 40,
    height: 40,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;

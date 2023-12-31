import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.small,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SIZES.medium,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  jobName: {
    color: COLORS.primary,
    fontFamily: "DMBold",
    fontSize: SIZES.medium,
  },
  jobType: {
    color: COLORS.gray,
    fontFamily: "DMRegular",
    fontSize: SIZES.small + 2,
    marginTop: 3,
    textTransform: "capitalize",
  },
  logoContainer: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    height: 50,
    justifyContent: "center",
    width: 50,
  },
  logoImage: {
    height: "70%",
    width: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
});

export default styles;

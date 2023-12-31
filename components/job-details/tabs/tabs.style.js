import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: name === activeTab ? COLORS.primary : '#F3F4F8',
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: 'System',
    fontSize: SIZES.small,
    color: name === activeTab ? '#C3BFCC' : '#AAA9B8',
  }),
  container: {
    marginBottom: SIZES.small / 2,
    marginTop: SIZES.small,
  },
});

export default styles;

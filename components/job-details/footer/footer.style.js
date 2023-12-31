import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  applyBtn: {
    alignItems: 'center',
    backgroundColor: '#FE7654',
    borderRadius: SIZES.medium,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    marginLeft: SIZES.medium,
  },
  applyBtnText: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    padding: 16
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    padding: SIZES.small,
    position: 'absolute',
    right: 0,
  },
  likeBtn: {
    alignItems: 'center',
    borderColor: '#F37453',
    borderRadius: SIZES.medium,
    borderWidth: 1,
    height: 55,
    justifyContent: 'center',
    width: 55,
  },
  likeBtnImage: {
    height: '40%',
    tintColor: '#F37453',
    width: '40%',
  },
});

export default styles;

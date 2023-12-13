import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  companyName: {
    color: '#B3AEC6',
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    marginTop: SIZES.small / 1.5,
  },
  container: (selectedJob, item) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : '#FFF',
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    shadowColor: COLORS.white,
    ...SHADOWS.medium,
  }),
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    color: '#B3AEC6',
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
  },
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  logoImage: {
    height: '70%',
    width: '70%',
  },
  publisher: (selectedJob, item) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
});

export default styles;

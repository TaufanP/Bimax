import {StyleSheet} from 'react-native';
import spaces from '~constants/spaces';
import colors from '~constants/colors';
import {diagonalDp} from '~helpers';

const styles = StyleSheet.create({
  container: {
    borderColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spaces.medium,
    borderRadius: spaces.small,
    borderWidth: diagonalDp(1),
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  content: {flexDirection: 'row', alignItems: 'center'},

  ghost: {
    backgroundColor: 'transparent',
  },

  icon: {
    position: 'absolute',
    width: spaces.semiLarge,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loading: {
    position: 'absolute',
    width: diagonalDp(40),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  primary: {
    backgroundColor: colors.secondary,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import spaces from '~constants/spaces';
import {diagonalDp} from '~helpers';

const styles = StyleSheet.create({
  button: {
    width: diagonalDp(48),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spaces.small,
  },
});

export default styles;

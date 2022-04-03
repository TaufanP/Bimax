import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: spaces.semiLarge,
    borderRadius: spaces.small,
  },
  content: {width: '100%', alignItems: 'center'},
});

export default styles;

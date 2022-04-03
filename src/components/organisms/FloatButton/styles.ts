import {StyleSheet} from 'react-native';
import spaces from '~constants/spaces';
import {winWidthPercent} from '~helpers';

const padding = spaces.semiLarge;

const styles = StyleSheet.create({
  flex: {flex: 1},
  floats: {
    position: 'absolute',
    width: winWidthPercent(100) - padding * 2,
    left: padding,
    bottom: padding,
  },
});

export default styles;

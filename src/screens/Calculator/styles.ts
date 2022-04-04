import {StyleSheet} from 'react-native';
import spaces from '~constants/spaces';
import {winWidthPercent} from '~helpers';

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flex: {flex: 1},
  floats: {
    position: 'absolute',
    width: winWidthPercent(100) - spaces.semiLarge * 2,
    left: spaces.semiLarge,
    bottom: spaces.semiLarge,
  },
});

export default styles;

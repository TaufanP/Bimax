import {Share} from 'react-native';
import {SharedValue, withSpring, withTiming} from 'react-native-reanimated';
import spaces from '~constants/spaces';
import {diagonalDp} from '~helpers';

const animate = (
  primary: boolean,
  position: SharedValue<number>,
  textPosition: SharedValue<number>,
) => {
  if (primary) {
    position.value = withSpring(0, {damping: 13});
    textPosition.value = withTiming(spaces.medium);
    return;
  }
  position.value = withTiming(diagonalDp(88));
  textPosition.value = withTiming(0);
};

export {animate};

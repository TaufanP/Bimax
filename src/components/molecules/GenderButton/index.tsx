import React, {PropsWithChildren, useEffect} from 'react';
import {TouchableOpacityProps, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Assets from '~Assets';
import {Button, Gap, Phrase} from '~components/atoms';
import spaces from '~constants/spaces';
import {diagonalDp} from '~helpers';
import styles from './styles';

interface PresetButtonProps extends TouchableOpacityProps {
  type?: 'male' | 'female';
  primary?: boolean;
}

const GenderButton = ({
  children,
  primary = true,
  type,
  ...props
}: PropsWithChildren<PresetButtonProps>) => {
  const position = useSharedValue(0);
  const textPosition = useSharedValue(spaces.medium);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{translateY: position.value}, {translateX: -spaces.medium}],
  }));

  const textStyle = useAnimatedStyle(() => ({
    transform: [{translateX: textPosition.value}],
  }));

  const animate = () => {
    if (primary) {
      position.value = withSpring(0, {damping: 13});
      textPosition.value = withTiming(spaces.medium);
      return;
    }
    position.value = withTiming(diagonalDp(88));
    textPosition.value = withTiming(0);
  };

  useEffect(() => {
    animate();
  }, [primary]);

  return (
    <Button
      {...props}
      style={[styles.container, styles[primary ? 'primary' : 'ghost']]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              width: spaces.semiLarge,
              aspectRatio: 1,
              justifyContent: 'center',
              alignItems: 'center',
            },
            iconStyle,
          ]}>
          {type === 'male' ? <Assets.svg.Male /> : <Assets.svg.Female />}
        </Animated.View>
        <Animated.View style={textStyle}>
          <Phrase preset={primary ? 'action' : 'actionPrimary'}>
            {children}
          </Phrase>
        </Animated.View>
      </View>
    </Button>
  );
};

export default GenderButton;

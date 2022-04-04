import React, {PropsWithChildren, useEffect} from 'react';
import {TouchableOpacityProps, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Assets from '~Assets';
import {Button, Phrase} from '~components/atoms';
import spaces from '~constants/spaces';
import styles from './styles';
import {animate} from './utilities';

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

  useEffect(() => {
    animate(primary, position, textPosition);
  }, [primary]);

  return (
    <Button
      {...props}
      style={[styles.container, styles[primary ? 'primary' : 'ghost']]}>
      <View style={styles.content}>
        <Animated.View style={[styles.icon, iconStyle]}>
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

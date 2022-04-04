import React, {PropsWithChildren, useEffect} from 'react';
import {TouchableOpacityProps} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Button} from '~components/atoms';
import styles from './styles';

interface BoxButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
}

const BoxButton = ({
  children,
  backgroundColor,
  disabled,
  ...props
}: PropsWithChildren<BoxButtonProps>) => {
  const opacity = useSharedValue(1);

  const buttonStyle = useAnimatedStyle(() => ({opacity: opacity.value}));

  useEffect(() => {
    opacity.value = withTiming(disabled ? 0 : 1);
  }, [disabled]);

  const background = {backgroundColor};

  return (
    <Animated.View style={buttonStyle}>
      <Button
        {...props}
        disabled={disabled}
        style={[styles.button, background]}>
        {children}
      </Button>
    </Animated.View>
  );
};

export default BoxButton;

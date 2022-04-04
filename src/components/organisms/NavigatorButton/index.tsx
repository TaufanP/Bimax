import React from 'react';
import {View} from 'react-native';
import Assets from '~Assets';
import {Phrase} from '~components/atoms';
import {BoxButton} from '~components/molecules';
import colors from '~constants/colors';
import styles from './styles';

interface NavigatorButtonProps {
  value?: string;
  disableLeft?: boolean;
  disableRight?: boolean;
  onPressLeft?(): void;
  onPressRight?(): void;
}

const NavigatorButton = ({
  value,
  disableLeft,
  disableRight,
  onPressRight,
  onPressLeft,
}: NavigatorButtonProps) => {
  return (
    <View style={styles.container}>
      <BoxButton
        backgroundColor={colors.secondary}
        disabled={disableLeft}
        onPress={onPressLeft}>
        <Assets.svg.Arrow iconColor={colors.white} />
      </BoxButton>
      <View style={styles.content}>
        <Phrase preset="subheadingBold" isCenter>
          {value}
        </Phrase>
      </View>
      <BoxButton
        backgroundColor={colors.secondary}
        disabled={disableRight}
        onPress={onPressRight}>
        <Assets.svg.Arrow iconColor={colors.white} type="right" />
      </BoxButton>
    </View>
  );
};

export default NavigatorButton;

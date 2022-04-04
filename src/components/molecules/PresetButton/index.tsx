import React, {PropsWithChildren} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Button, Phrase} from '~components/atoms';
import styles from './styles';

interface PresetButtonProps extends TouchableOpacityProps {
  preset?: 'primary' | 'ghost';
}

const PresetButton = ({
  children,
  preset = 'primary',
  disabled,
  ...props
}: PropsWithChildren<PresetButtonProps>) => {
  return (
    <Button
      {...props}
      disabled={disabled}
      style={[styles.container, styles[preset], disabled && styles.disabled]}>
      <Phrase
        preset={
          disabled
            ? 'disabled'
            : preset === 'primary'
            ? 'action'
            : 'actionPrimary'
        }>
        {children}
      </Phrase>
    </Button>
  );
};

export default PresetButton;

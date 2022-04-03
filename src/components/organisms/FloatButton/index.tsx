import React from 'react';
import {TouchableOpacityProps, View} from 'react-native';
import {PresetButton} from '~components/molecules';
import styles from './styles';

interface FloatButtonProps extends TouchableOpacityProps {
  label: string;
}

const FloatButton = ({label, ...props}: FloatButtonProps) => {
  return (
    <View style={styles.floats}>
      <PresetButton style={styles.flex} {...props}>
        {label}
      </PresetButton>
    </View>
  );
};

export default FloatButton;

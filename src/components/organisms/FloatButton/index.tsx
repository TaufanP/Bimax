import React, {PropsWithChildren} from 'react';
import {TouchableOpacityProps, View} from 'react-native';
import {PresetButton} from '~components/molecules';
import styles from './styles';

interface FloatButtonProps extends TouchableOpacityProps {
  label?: string;
}

const FloatButton = ({
  label,
  children,
  ...props
}: PropsWithChildren<FloatButtonProps>) => {
  return (
    <View style={styles.floats}>
      {!label ? (
        <>{children}</>
      ) : (
        <PresetButton style={styles.flex} {...props}>
          {label}
        </PresetButton>
      )}
    </View>
  );
};

export default FloatButton;

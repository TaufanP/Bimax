import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {isIos} from '~helpers';
import styles from './styles';

interface FieldProps extends TextInputProps {}

const Field = ({...props}: FieldProps) => {
  return (
    <View
      style={[
        {
          borderRadius: spaces.small,
          paddingHorizontal: spaces.medium,
          backgroundColor: colors.white80,
        },
      ]}>
      <TextInput
        placeholderTextColor={colors.white90}
        style={[styles.input, isIos && styles.iosInput]}
        {...props}
      />
    </View>
  );
};

export default Field;

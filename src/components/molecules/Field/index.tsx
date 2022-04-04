import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import colors from '~constants/colors';
import {isIos} from '~helpers';
import styles from './styles';

interface FieldProps extends TextInputProps {}

const Field = ({...props}: FieldProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={colors.white90}
        style={[styles.input, isIos && styles.iosInput]}
        {...props}
      />
    </View>
  );
};

export default Field;

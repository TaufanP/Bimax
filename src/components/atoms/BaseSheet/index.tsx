import React, {forwardRef, PropsWithChildren} from 'react';
import {View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {ActionSheetProps} from 'react-native-actions-sheet/dist/src/types';
import styles from './styles';

interface BaseSheetProps extends ActionSheetProps {}

const BaseSheet = forwardRef<any, PropsWithChildren<BaseSheetProps>>(
  ({children, ...props}, ref) => {
    return (
      <ActionSheet
        ref={ref}
        bounceOnOpen
        gestureEnabled
        containerStyle={styles.container}
        {...props}>
        <View style={styles.child}>{children}</View>
      </ActionSheet>
    );
  },
);

export default BaseSheet;

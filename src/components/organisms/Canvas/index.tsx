import React, {PropsWithChildren} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import colors from '~constants/colors';
import styles from './styles';

interface CanvasProps {
  backgroundColor?: string;
}

const Canvas = ({
  children,
  backgroundColor = colors.white100,
}: PropsWithChildren<CanvasProps>) => {
  const style = [styles.container, {backgroundColor}];
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={style}>{children}</GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default Canvas;

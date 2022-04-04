import React from 'react';
import {View} from 'react-native';
import {Button, Gap, Phrase} from '~components/atoms';
import spaces from '~constants/spaces';
import styles from './styles';

interface InputTileProps {
  value: number;
  unit: string;
  label: string;
  onPress(): void;
}

const InputTile = ({unit, label, onPress, value}: InputTileProps) => (
  <Button style={styles.container} onPress={onPress}>
    <Phrase preset="subheadingBold">{label}</Phrase>
    <Gap vertical={spaces.semiLarge} />
    <View style={styles.content}>
      <Phrase preset="banner" isCenter>
        {`${value}${unit}`}
      </Phrase>
    </View>
  </Button>
);

export default InputTile;

import React from 'react';
import {View} from 'react-native';
import Assets from '~Assets';
import {Button, Phrase} from '~components/atoms';
import {useNavigate} from '~hooks';
import styles from './styles';

interface HeaderProps {
  label: string;
}

const Header = ({label}: HeaderProps) => {
  const navigation = useNavigate();

  const onPressBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Button onPress={onPressBack} style={styles.button}>
        <Assets.svg.Arrow />
      </Button>
      <View style={styles.content}>
        <Phrase preset="subheadingBold" isCenter>
          {label}
        </Phrase>
      </View>
      <Button style={[styles.button, styles.hide]} />
    </View>
  );
};

export default Header;

import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {DummyFlatList, Gap, Phrase} from '~components/atoms';
import {Header} from '~components/molecules';
import {Canvas, FloatButton} from '~components/organisms';
import spaces from '~constants/spaces';
import {calculateBodyMassIndex, categoryBodyMassIndex} from '~helpers';
import {useNavigate} from '~hooks';
import {RootStackParamList} from '~types';
import styles from './styles';

interface BodyIndexProps {}

const BodyIndex = ({}: BodyIndexProps) => {
  const navigation = useNavigate();
  const route = useRoute<RouteProp<RootStackParamList, 'BodyIndex'>>();
  const {height, gender, weight} = route?.params || {};

  const bmi = calculateBodyMassIndex(height, weight);
  const bmiType = categoryBodyMassIndex(parseFloat(bmi));

  const onRecalculate = () =>
    navigation.navigate('Home', {screen: 'Calculator'});

  return (
    <Canvas>
      <Header label="Body Mass Index" />
      <DummyFlatList usePadding>
        <Gap vertical={spaces.semiLarge} />
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Phrase preset="banner">{bmi}</Phrase>
          <Phrase preset="actionPrimary" style={styles.text}>
            {bmiType}
          </Phrase>
        </View>
        <Gap vertical={spaces.semiLarge} />
        <Phrase preset="regular">{`Your BMI is ${bmi} and it is ${bmiType}.`}</Phrase>
        <Gap vertical={spaces.small} />
        {/* <Phrase preset="regular">
          It is recommended for you to have your basal metabolic rate (BMR)
          around 1400kcal/day.
        </Phrase> */}
      </DummyFlatList>
      <FloatButton label="Recalculate" onPress={onRecalculate} />
    </Canvas>
  );
};

export default BodyIndex;

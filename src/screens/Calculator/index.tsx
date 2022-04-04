import React, {createRef, useState} from 'react';
import {View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {BaseSheet, DummyFlatList, Gap, Phrase} from '~components/atoms';
import {BodyInput, GenderButton, InputTile} from '~components/molecules';
import {Canvas, FloatButton} from '~components/organisms';
import spaces from '~constants/spaces';
import {useNavigate} from '~hooks';
import {IGender} from '~types';
import styles from './styles';

const Calculator = () => {
  const navigation = useNavigate();

  const heightRef = createRef<ActionSheet>();
  const weightRef = createRef<ActionSheet>();

  const [bodyHeight, setBodyHeight] = useState<number>(0);
  const [bodyWeight, setBodyWeight] = useState<number>(0);
  const [gender, setGender] = useState<IGender>('Male');

  const onCalculate = () =>
    navigation.navigate('BodyIndex', {
      gender,
      height: bodyHeight,
      weight: bodyWeight,
    });

  const onFemalePress = () => setGender('Female');

  const onHeightPress = () => heightRef.current?.show();

  const onMalePress = () => setGender('Male');

  const onSetBodyHeight = (height: number) => {
    heightRef.current?.hide();
    setBodyHeight(height);
  };

  const onSetBodyWeight = (weight: number) => {
    weightRef.current?.hide();
    setBodyWeight(weight);
  };

  const onWeightPress = () => weightRef.current?.show();

  const formComplete = !!gender && !!bodyHeight && !!bodyWeight;

  return (
    <Canvas>
      <DummyFlatList usePadding>
        <Gap vertical={spaces.semiLarge} />
        <InputTile
          label={'Height'}
          unit={'cm'}
          onPress={onHeightPress}
          value={bodyHeight}
        />
        <Gap vertical={spaces.semiLarge} />
        <InputTile
          label={'Weight'}
          unit={'kg'}
          onPress={onWeightPress}
          value={bodyWeight}
        />
        <Gap vertical={spaces.semiLarge} />
        <Phrase preset="subheadingBold">Gender</Phrase>
        <Gap vertical={spaces.semiLarge} />
        <View style={styles.buttons}>
          <View style={styles.flex}>
            <GenderButton
              type="male"
              primary={gender === 'Male'}
              onPress={onMalePress}>
              Male
            </GenderButton>
          </View>
          <Gap horizontal={spaces.semiLarge} />
          <View style={styles.flex}>
            <GenderButton
              type="female"
              primary={gender === 'Female'}
              onPress={onFemalePress}>
              Female
            </GenderButton>
          </View>
        </View>
      </DummyFlatList>
      <FloatButton
        disabled={!formComplete}
        onPress={onCalculate}
        label="Calculate"
      />

      <BaseSheet ref={heightRef}>
        <BodyInput
          label="Your height"
          buttonLabel="Save Height"
          onSave={onSetBodyHeight}
          placeholder="Enter your height"
        />
      </BaseSheet>
      <BaseSheet ref={weightRef}>
        <BodyInput
          label="Your weight"
          buttonLabel="Save Weight"
          onSave={onSetBodyWeight}
          placeholder="Enter your weight"
        />
      </BaseSheet>
    </Canvas>
  );
};

export default Calculator;

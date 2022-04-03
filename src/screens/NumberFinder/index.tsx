import React, {useState} from 'react';
import {DummyFlatList, Gap, Phrase} from '~components/atoms';
import {PresetButton} from '~components/molecules';
import {Canvas, FloatButton, NavigatorButton} from '~components/organisms';
import spaces from '~constants/spaces';
import {generateRandomNumbers, ordinalNumbers, smallestNumbers} from '~helpers';

const NumberFinder = () => {
  const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers());
  const [index, setIndex] = useState<number>(0);

  const orderedNumbers = smallestNumbers([...numbers]);

  const aboveLimit = index >= 5;

  const bottomLimit = index <= 0;

  const onGenerate = () => setNumbers(generateRandomNumbers());

  const onNext = () => setIndex(current => current + 1);

  const onPrev = () => setIndex(current => current - 1);

  return (
    <Canvas>
      <DummyFlatList usePadding>
        <Gap vertical={spaces.semiLarge} />
        <Phrase preset="subheadingBold">List of Numbers</Phrase>
        <Gap vertical={spaces.small} />
        <Phrase preset="regular">{`${JSON.stringify(numbers)}`}</Phrase>
        <Gap vertical={spaces.semiLarge} />
        <Phrase preset="subheadingBold">{`The ${ordinalNumbers(
          `${index + 1}`,
        )} smallest number is`}</Phrase>
        <Phrase preset="banner">{orderedNumbers[index]}</Phrase>
      </DummyFlatList>
      <FloatButton>
        <NavigatorButton
          value={`${index + 1}`}
          onPressLeft={onPrev}
          onPressRight={onNext}
          disableLeft={bottomLimit}
          disableRight={aboveLimit}
        />
        <Gap vertical={spaces.medium} />
        <PresetButton preset="ghost" onPress={onGenerate}>
          Generate Numbers
        </PresetButton>
      </FloatButton>
    </Canvas>
  );
};

export default NumberFinder;

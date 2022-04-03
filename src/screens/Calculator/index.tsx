import React from 'react';
import {View} from 'react-native';
import {Button, DummyFlatList, Gap, Phrase} from '~components/atoms';
import {Canvas} from '~components/organisms';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {diagonalDp, winWidthPercent} from '~helpers';

const Calculator = () => {
  return (
    <Canvas>
      <DummyFlatList usePadding>
        <Gap vertical={spaces.semiLarge} />
        <Button
          style={{
            backgroundColor: colors.white,
            padding: spaces.semiLarge,
            borderRadius: spaces.small,
          }}>
          <Phrase preset="subheadingBold">Height</Phrase>
          <Gap vertical={spaces.semiLarge} />
          <View style={{width: '100%', alignItems: 'center'}}>
            <Phrase
              style={{
                fontSize: diagonalDp(48),
                color: colors.black100,
                fontWeight: 'bold',
              }}
              isCenter>
              160.12cm
            </Phrase>
          </View>
        </Button>
        <Gap vertical={spaces.semiLarge} />
        <Button
          style={{
            backgroundColor: colors.white,
            padding: spaces.semiLarge,
            borderRadius: spaces.small,
          }}>
          <Phrase preset="subheadingBold">Weight</Phrase>
          <Gap vertical={spaces.semiLarge} />
          <View style={{width: '100%', alignItems: 'center'}}>
            <Phrase
              style={{
                fontSize: diagonalDp(48),
                color: colors.black100,
                fontWeight: 'bold',
              }}
              isCenter>
              60kg
            </Phrase>
          </View>
        </Button>
        <Gap vertical={spaces.semiLarge} />
        <Phrase preset="subheadingBold">Gender</Phrase>
        <Gap vertical={spaces.semiLarge} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Button
            style={{
              borderRadius: spaces.small,
              flex: 1,
              paddingVertical: spaces.medium,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: colors.secondary,
              borderWidth: 2,
              backgroundColor: colors.secondary,
            }}>
            <Phrase preset="action">Male</Phrase>
          </Button>
          <Gap horizontal={spaces.semiLarge} />
          <Button
            style={{
              borderRadius: spaces.small,
              flex: 1,
              paddingVertical: spaces.medium,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: colors.secondary,
              borderWidth: 2,
            }}>
            <Phrase preset="actionPrimary">Female</Phrase>
          </Button>
        </View>
      </DummyFlatList>
      <View
        style={{
          position: 'absolute',
          width: winWidthPercent(100) - spaces.semiLarge * 2,
          left: spaces.semiLarge,
          bottom: spaces.semiLarge,
        }}>
        <Button
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: spaces.medium,
            borderRadius: spaces.small,
            backgroundColor: colors.secondary,
          }}>
          <Phrase preset="action">Calculate</Phrase>
        </Button>
      </View>
    </Canvas>
  );
};

export default Calculator;

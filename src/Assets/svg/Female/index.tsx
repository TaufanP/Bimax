import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import {diagonalDp} from '~helpers';
import FemaleIcon from './Female.svg';

const size = diagonalDp(24);

const Female = ({...props}: SvgProps) => (
  <FemaleIcon fill={colors.white} width={size} height={size} {...props} />
);

export default Female;

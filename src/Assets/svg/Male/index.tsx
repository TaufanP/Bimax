import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import {diagonalDp} from '~helpers';
import MaleIcon from './Male.svg';

const size = diagonalDp(24);

const Male = ({...props}: SvgProps) => (
  <MaleIcon fill={colors.white} width={size} height={size} {...props} />
);

export default Male;

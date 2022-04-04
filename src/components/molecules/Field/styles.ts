import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {textSizes} from '~constants/textSizes';

const styles = StyleSheet.create({
  container: {
    borderRadius: spaces.small,
    paddingHorizontal: spaces.medium,
    backgroundColor: colors.white80,
  },

  input: {
    color: colors.black100,
    fontSize: textSizes['14'],
    paddingVertical: spaces.medium,
    paddingLeft: spaces.xsmall,
    flex: 0,
  },
  inputContainer: {
    backgroundColor: colors.white80,
    borderRadius: spaces.small,
    paddingHorizontal: spaces.medium,
  },
});

export default styles;

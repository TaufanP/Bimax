import {StyleSheet} from 'react-native';
import spaces from '~constants/spaces';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: spaces.small,
  },
  content: {flex: 1, alignItems: 'center'},
});

export default styles;

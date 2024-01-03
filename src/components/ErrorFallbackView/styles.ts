import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: vs(16),
  },
  text: {
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Rubik-SemiBold',
  },
  message: {
    fontFamily: 'Rubik-Regular',
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
    marginTop: vs(32),
  },
  btnTxt: {
    fontFamily: 'Rubik-SemiBold',
  },
});

export default styles;

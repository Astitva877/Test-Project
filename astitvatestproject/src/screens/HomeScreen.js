import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.textStyle}> Sign Up </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.textStyle}> Log In </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F4B55D',
    width: '90%',
    height: '10%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

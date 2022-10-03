import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [erremail, setErremail] = useState(false);
  const [errpassword, setErrpassword] = useState(false);
  const [emailMessage, setEmailMesage] = useState('');
  const [passMessage, setPassMessage] = useState('');
  const handleSignup = async () => {
    let res = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email === '') {
      setErremail(true);
      setEmailMesage('* Please Enter Email');
    } else if (res.test(email) === false) {
      setErremail(true);
      setEmailMesage('* Please Enter Valid Email');
    } else if (password === '') {
      setErrpassword(true);
      setErremail(false);
      setEmailMesage('');
      setPassMessage('* Please Set a Password');
    } else if (password.length < 6) {
      setErrpassword(true);
      setPassMessage('* Password should be of minimum 6 character');
    } else {
      setErremail(false);
      setErrpassword(false);
      try {
        const isUserCreated = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        alert('User Created');
        navigation.navigate('Home');
        console.log(isUserCreated);
      } catch (err) {
        console.log(err);

        setMessage(err.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Sign Up
        </Text>
        <TextInput
          style={styles.inputBox}
          label={'Email'}
          mode="outlined"
          placeholder="Enter Your Email"
          value={email}
          onChangeText={value => setEmail(value)}
          error={erremail}
        />
        {erremail ? (
          <Text style={{color: 'red', marginLeft: 15, marginBottom: 5}}>
            {emailMessage}
          </Text>
        ) : null}
        <TextInput
          style={styles.inputBox}
          label={'Password'}
          mode="outlined"
          placeholder="Enter Your Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
          error={errpassword}
        />
        {errpassword ? (
          <Text style={{color: 'red', marginLeft: 15, marginBottom: 5}}>
            {passMessage}
          </Text>
        ) : null}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleSignup()}>
          <Text style={{color: '#fff'}}>Signup</Text>
        </TouchableOpacity>

        <Text style={{marginLeft: 10, color: 'red'}}>{message}</Text>
      </View>
    </View>
  );
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: width - 30,
    borderRadius: 15,
    // borderWidth: 2,
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#A7A334',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginHorizontal: 60,
    height: 38,
  },
});

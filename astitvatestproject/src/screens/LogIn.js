import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {TextInput} from 'react-native-paper';


export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [erremail, setErremail] = useState(false);
  const [errpassword, setErrpassword] = useState(false);
  const [emailMessage, setEmailMesage] = useState('');
  const [passMessage, setPassMessage] = useState('');
  //
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (email === '') {
      setErremail(true);
      setEmailMesage('* Please Enter Email');
    } else if (password === '') {
      setErrpassword(true);
      setErremail(false);
      setEmailMesage('');
      setPassMessage('* Please Enter Password');
    } else {
      setErremail(false);
      setErrpassword(false);
      try {
        const isUserLogin = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        setMessage('');
        console.log(isUserLogin);

        navigation.navigate('Dashboard', {
          email: isUserLogin.user.email,
        });
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
          Login
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
          placeholder="Enter Your Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
          label={'Password'}
          mode="outlined"
          error={errpassword}
        />
        {errpassword ? (
          <Text style={{color: 'red', marginLeft: 15, marginBottom: 5}}>
            {passMessage}
          </Text>
        ) : null}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleLogin()}>
          <Text style={{color: '#fff'}}>Login</Text>
        </TouchableOpacity>

        <Text style={{marginLeft: 5}}>{message}</Text>

        <TouchableOpacity
          style={styles.signup}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={{color: 'blue'}}>New User Signup ?</Text>
        </TouchableOpacity>
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
  signup: {
    alignItems: 'center',
  },
});

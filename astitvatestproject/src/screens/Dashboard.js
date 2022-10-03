import React from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
const Dashboard = () => {
  const route = useRoute();
  const {email} = route.params;
  return <Text> Hii, You have just loged in, you email is {email}</Text>;
};

export default Dashboard;

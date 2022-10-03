import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import DetailsScreen from './src/assets/components/DetailsScreen';
// import HomeScreen from './src/assets/components/HomeScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;

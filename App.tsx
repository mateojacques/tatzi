import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './Navigation';
import TopBar from './components/layout/TopBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TopBar />
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

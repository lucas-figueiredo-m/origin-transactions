import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { MainStack } from '@navigators';
import '@locales';
import { Provider } from 'react-redux';
import { store } from '@store';
import Crashlytics from '@react-native-firebase/crashlytics';

const App: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      Crashlytics().crash();
    }, 5000);
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

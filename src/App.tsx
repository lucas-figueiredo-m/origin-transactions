import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { MainStack } from '@navigators';
import '@locales';
import { Provider } from 'react-redux';
import { store } from '@store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
